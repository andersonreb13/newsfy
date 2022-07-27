import { Article } from "../model/types";

export const articleFactory = (list: any): Article[] => {
	const articlesList = list.map((element: any) => {
		let article = {} as Article;

		article.title = element.title[0];
		article.link = element.link[0];
		article.description = element.description[0];
		article.publicationDate = new Date(element.pubDate[0]);
		article.externalId = element.guid[0]["_"] || element.guid[0];
		article.mainPicture =
			element["media:content"][1]?.["$"].url ||
			element["media:content"][0]["$"].url;

		return article;
	});
	return articlesList;
};
