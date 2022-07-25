import { Article } from "./../model/types";

const connection = require("../services/db");

exports.recordRssRaw = (rawContent: string) => {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT INTO imports (importDate, rawContent) VALUES (?, ?);`,
			[new Date(), rawContent],
			(error: Object, results: Object) => {
				error ? reject(error) : resolve(results);
			}
		);
	});
};

exports.addArticle = (article: Article) => {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT INTO articles (
				externalId,
				importDate,
				title,
				description,
				publicationDate,
				link,
				mainPicture
			) VALUES (?, ?, ?, ?, ?, ?, ?);`,
			[
				article.guid,
				new Date(),
				article.title,
				article.description,
				new Date(article.pubDate.toString()),
				article.link,
				article["media:content"][1]?.["$"]["url"] ||
					article["media:content"][0]?.["$"]["url"],
			],
			(error: Object, results: Object) => {
				error ? reject(error) : resolve(results);
			}
		);
	});
};

exports.getArticles = () => {
	return new Promise((resolve, reject) => {
		connection.query(
			`SELECT * FROM articles;`,
			(error: Object, results: Article[]) => {
				error ? reject(error) : resolve(results);
			}
		);
	});
};
