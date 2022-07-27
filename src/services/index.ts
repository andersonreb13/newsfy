import axios from "axios";
import xml2js from "xml2js";

import { Raw, Article } from "../model/types";
import { articleFactory } from "../helper/factory";

const repository = require("../repository");

exports.importData = async (url: string) => {
	try {
		const { data } = await axios.get(url);
		const { rss } = await xml2js.parseStringPromise(data);

		if (!rss) return;
		await saveRaw(rss);

		const articles: Article[] = articleFactory(rss.channel[0].item);
		await save(articles);

		return rss;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

exports.getArticles = async (): Promise<Article[]> => {
	try {
		return repository.getAllArticles();
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const saveRaw = async (raw: Raw) => {
	try {
		await repository.recordRssRaw(JSON.stringify(raw));
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const save = async (articlesIncomingList: Article[]) => {
	try {
		const currentExtIdArticles: Article[] =
			await repository.getAllArticles();

		articlesIncomingList.forEach((articleIncoming: Article) => {
			currentExtIdArticles.some((item) => {
				item.externalId === articleIncoming.externalId &&
					(articleIncoming.id = item.id);
			});
			repository.saveArticles(articleIncoming);
		});
	} catch (error) {
		console.log({ error });
		throw error;
	}
};
