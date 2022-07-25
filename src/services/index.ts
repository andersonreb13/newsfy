import { Article } from "../model/types";

const axios = require("axios");
const xml2js = require("xml2js");
const repository = require("../repository");

const importData = async (url: string) => {
	try {
		const { data } = await axios.get(url);
		const { rss } = await xml2js.parseStringPromise(data);

		if (!rss) return { data: null };

		await repository.recordRssRaw(JSON.stringify(rss));
		/** Antes de inserir os Artigos, fazer um select para um array artigosInseridos[].
		 * Fazer uma lógica para que antes de inserir um novo artigo, verificar se o mesmo existe no array artigosInseridos[].
		 * Caso EXISTA, cair no fluxo de UPDATE um Artigo já existente WHERE guid|externalId sejam iguais.
		 * Caso NÃO EXISTA, cair no fluxo de INSERT de um novo Artigo.
		 */
		rss.channel[0].item.forEach((a: Article) => repository.addArticle(a));

		return rss;
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
