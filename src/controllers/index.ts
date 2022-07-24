import { Request, Response, NextFunction } from "express";

const service = require("../services/");

exports.importData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { siteRssUrl } = req.body;
		const rssRaw = await service.importData(siteRssUrl);
		res.status(201).send(rssRaw);
	} catch (error) {
		next(error);
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
		next(error);
	}
};
