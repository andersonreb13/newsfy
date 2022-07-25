export interface Raw {
	channel: [
		{
			item: Article[];
		}
	];
}
export interface Article {
	id: number;
	importDate: Date;
	title: string[];
	link: string[];
	description: string[];
	pubDate: Date[];
	guid: string[];
	"media:content": MediaContent[];
}

interface MediaContent {
	$: {
		width: number;
		url: string;
	};
}
