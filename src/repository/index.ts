import { Article } from "./../model/types";
import mysqlConn from "../connection/mysql";

exports.recordRssRaw = (rawContent: string) => {
	return new Promise((resolve, reject) => {
		mysqlConn.query(
			`INSERT INTO imports (importDate, rawContent) VALUES (?, ?);`,
			[new Date(), rawContent],
			(error: Object, results: Object) => {
				error ? reject(error) : resolve(results);
			}
		);
	});
};

exports.saveArticles = (article: Article) => {
	return new Promise((resolve, reject) => {
		mysqlConn.query(
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

exports.getAllArticles = (): Promise<Article[]> => {
	return new Promise((resolve, reject) => {
		mysqlConn.query(
			`SELECT * FROM articles;`,
			(error: Object, results: Article[]) => {
				error ? reject(error) : resolve(results);
			}
		);
	});
};
