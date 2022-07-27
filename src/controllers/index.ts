import { Request, Response } from "express";

import {
	RequestType,
	RequestBody,
	RequestParams,
	RequestQuery,
	ResponseBody,
} from "../model/types";
const service = require("../services/");

exports.importData = async (
	req: RequestType<RequestParams, ResponseBody, RequestBody, RequestQuery>,
	res: Response
) => {
	try {
		const { siteRssUrl }: { siteRssUrl: string } = req.query;
		const rssRaw = await service.importData(siteRssUrl);
		res.status(201).send(rssRaw);
	} catch (error) {
		res.status(500).send({ error: "An error occurred." });
	}
};

exports.listArticles = async (req: Request, res: Response) => {
	try {
		const articles = await service.getArticles();
		res.status(200).send(articles);
	} catch (error) {
		res.status(500).send({ error: "An error occurred." });
	}
};
