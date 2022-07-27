import * as core from "express-serve-static-core";
export interface Raw {
	channel: [
		{
			item: Article[];
		}
	];
}

export interface Article {
	id?: number;
	importDate?: Date;
	title: string;
	link: string;
	description: string;
	publicationDate: Date;
	externalId: string;
	mainPicture: string;
}

export interface RequestType<
	P = core.ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = core.Query,
	Locals extends Record<string, any> = Record<string, any>
> extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals> {}

export interface RequestQuery {
	siteRssUrl: string;
}
export interface RequestParams {}
export interface ResponseBody {}
export interface RequestBody {}
