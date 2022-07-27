import { Article, Raw } from "./../model/types";

const connection = require("../services/db");

exports.recordRssRaw = (rawContent: Raw) => {
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
				mainPicture,
				id
			) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			ON DUPLICATE KEY UPDATE 
				externalId = VALUES(externalId),
				importDate = VALUES(importDate),
				title = VALUES(title),
				description = VALUES(description),
				publicationDate = VALUES(publicationDate),
				link = VALUES(link),
				mainPicture = VALUES(mainPicture)
			;`,
			[
				article.externalId,
				new Date(),
				article.title,
				article.description,
				article.publicationDate,
				article.link,
				article.mainPicture,
				article.id,
			],
			(error: Object, results: Article[]) => {
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
