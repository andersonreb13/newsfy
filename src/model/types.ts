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
