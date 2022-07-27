import { Request, Response, NextFunction } from "express";

const service = require("../services/");

exports.importData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { siteRssUrl } = req.query;
		const rssRaw = await service.importData(siteRssUrl);
		res.status(201).send(rssRaw);
	} catch (error) {
		res.status(500).send({ error: "An error occurred." });
	}
};

exports.listArticles = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const articles = await service.getArticles();
		res.status(200).send(articles);
	} catch (error) {
		res.status(500).send({ error: "An error occurred." });
	}
};
