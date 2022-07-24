import { Article } from "./../model/types";

const connection = require("../services/db");

exports.recordRssRaw = (rawContent: string) => {
	connection.query(
		`INSERT INTO imports (importDate, rawContent) VALUES (?, ?);`,
		[new Date(), rawContent],
		(error: any, results: any) => {
			console.log("Output --> ", error || results);
		}
	);
};

exports.addArticle = (article: Article) => {
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
			console.log("Output --> ", error || results);
		}
	);
};

exports.getArticles = () => {
	connection.query(
		`SELECT * FROM articles limit 1;`,
		(error: any, results: any) => {
			console.log("Output --> ", error || results);
			return results[0];
		}
	);
};
