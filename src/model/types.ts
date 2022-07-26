import * as core from "express-serve-static-core";
export interface Raw {
	channel: [
		{
			item: [
				{
					importDate?: string[];
					title: string[];
					link: string[];
					description: string[];
					pubDate: string[];
					guid: string[];
					"media:content": [
						{
							$: {
								url: string;
							};
						}
					];
				}
			];
		}
	];
}

export interface Article {
	id?: number;
	importDate?: string;
	title: string;
	link: string;
	description: string;
	publicationDate: string;
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
