import { Raw, Article } from "../model/types";
const { articleFactory } = require("../helper/articleFactory");

const axios = require("axios");
const xml2js = require("xml2js");
const repository = require("../repository");

const importData = async (url: string) => {
	try {
		const { data } = await axios.get(url);
		const { rss } = await xml2js.parseStringPromise(data);

		if (!rss) return;
		await saveRaw(rss);

		const articles: Article[] = articleFactory(rss.channel[0].item);
		await saveArticles(articles);

		return rss;
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

const saveArticles = async (articlesIncomingList: Article[]) => {
	try {
		const currentExtIdArticles: Article[] = await repository.getArticles();

		articlesIncomingList.forEach((articleIncoming: Article) => {
			currentExtIdArticles.some((item) => {
				item.externalId === articleIncoming.externalId &&
					(articleIncoming.id = item.id);
			});
			repository.addArticle(articleIncoming);
		});
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

const getArticles = async () => {
	try {
		return repository.getArticles();
	} catch (error) {
		console.log({ error });
		throw error;
	}
};

module.exports = {
	importData,
	getArticles,
};
