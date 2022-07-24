import { Article } from "../model/types";

const axios = require("axios");
const xml2js = require("xml2js");
const repository = require("../repository");

const importData = async (url: string) => {
	try {
		const { data } = await axios.get(url);
		const { rss } = await xml2js.parseStringPromise(data);

		if (!rss) return { data: null };

		repository.recordRssRaw(JSON.stringify(rss));
		rss.channel[0].item.forEach((a: Article) => repository.addArticle(a));

		return rss;
	} catch (error) {
		console.log({ error });
	}
};

const getArticles = () => {
	try {
		const result = repository.getArticles();
		return result;
	} catch (error) {
		console.log({ error });
	}
};

module.exports = {
	importData,
	getArticles,
};
