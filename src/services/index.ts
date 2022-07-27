import { ExternalId } from "./../model/types";
import { Raw, Article } from "../model/types";
const { toArticle } = require("../helper/articleFactory");

const axios = require("axios");
const xml2js = require("xml2js");
const repository = require("../repository");

const importData = async (url: string) => {
	try {
		const { data } = await axios.get(url);
		const { rss } = await xml2js.parseStringPromise(data);

		if (!rss) return;
		await saveRaw(rss);
		await saveArticles(rss.channel[0].item);

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

// Improvement method
const saveArticles = async (articlesIncomingList: any[]) => {
	try {
		const currentExtIdArticles: ExternalId[] =
			await repository.getAllExternalId();
		const addedArticles: string[] = currentExtIdArticles.map(
			(c: ExternalId) => c.externalId
		);

		articlesIncomingList.forEach((articleIncoming: any) => {
			const article: Article = articleIncoming.guid[0].hasOwnProperty("_")
				? toArticle(articleIncoming)
				: articleIncoming;

			if (addedArticles.includes(article.guid[0])) {
				repository.updateArticle(article);
			} else {
				repository.addArticle(article);
			}
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
