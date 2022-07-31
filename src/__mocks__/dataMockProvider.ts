import { Article } from "../model/types";

export const articleResultSet: Article[] = [
	{
		id: 1970,
		externalId: "https://let.it.be",
		importDate: "1970-12-12T03:00:00.000Z",
		title: "titleMock",
		description: "descriptionMock",
		publicationDate: "1970-12-12T03:00:00.000Z",
		link: "https://let.it.be",
		mainPicture: "https://let.it.be/the-beatles",
	},
];

export const articlesListFactoryMock: Article[] = [
	{
		externalId: "https://let.it.be",
		title: "titleMock",
		description: "descriptionMock",
		publicationDate: "1970-12-12T03:00:00.000Z",
		link: "https://let.it.be",
		mainPicture: "https://let.it.be/the-beatles",
	},
];

export const rawContentJsonMock: any = {
	$: {
		"xmlns:media": "http://search.yahoo.com/mrss/",
		"xmlns:dc": "http://purl.org/dc/elements/1.1/",
		version: "2.0",
	},
	channel: [
		{
			title: ["Europe | The Guardian"],
			link: ["https://www.theguardian.com/world/europe-news"],
			description: [
				"Latest Europe news, comment and analysis from the Guardian, the world's leading liberal voice",
			],
			language: ["en-gb"],
			copyright: [
				"Guardian News and Media Limited or its affiliated companies. All rights reserved. 2022",
			],
			pubDate: ["Sun, 31 Jul 2022 11:22:13 GMT"],
			"dc:date": ["2022-07-31T11:22:13Z"],
			"dc:language": ["en-gb"],
			"dc:rights": [
				"Guardian News and Media Limited or its affiliated companies. All rights reserved. 2022",
			],
			image: [
				{
					title: ["The Guardian"],
					url: [
						"https://assets.guim.co.uk/images/guardian-logo-rss.c45beb1bafa34b347ac333af2e6fe23f.png",
					],
					link: ["https://www.theguardian.com"],
				},
			],
			item: [
				{
					title: [
						"Russia-Ukraine war live: drone hits Russia’s Black Sea fleet HQ; Zelenskiy urges civilians to leave Donetsk",
					],
					link: [
						"https://www.theguardian.com/world/live/2022/jul/31/russia-ukraine-war-drone-hits-russias-black-sea-fleet-hq-zelenskiy-urges-civilians-to-leave-donetsk-latest-updates",
					],
					description: [
						'<p>Sevastopol stops Navy Day festivities after drone attack; hundreds of thousands ‘must evacuate Donetsk’ to avoid falling into enemy hands</p><ul><li><a href="https://www.theguardian.com/world/2022/jul/31/russia-ukraine-war-latest-what-we-know-on-day-15-of-the-invasion">What we know on day 158 of the invasion</a></li></ul><p>Russia has said it has invited United Nations and Red Cross experts to investigate the deaths of dozens of Ukrainian prisoners of war held by Moscow-backed separatists, Reuters reports.</p><p>At least 50 prisoners of war were killed in an attack on a jail in <a draggable="true" href="https://twitter.com/hashtag/Olenivka?src=hashtag_click">Olenivka</a>, in Russian-occupied Donetsk, on Friday. Both sides in the war have blamed the blast on each other. </p> <a href="https://www.theguardian.com/world/live/2022/jul/31/russia-ukraine-war-drone-hits-russias-black-sea-fleet-hq-zelenskiy-urges-civilians-to-leave-donetsk-latest-updates">Continue reading...</a>',
					],
					category: [
						{
							_: "Ukraine",
							$: {
								domain: "https://www.theguardian.com/world/ukraine",
							},
						},
						{
							_: "Russia",
							$: {
								domain: "https://www.theguardian.com/world/russia",
							},
						},
						{
							_: "Europe",
							$: {
								domain: "https://www.theguardian.com/world/europe-news",
							},
						},
						{
							_: "World news",
							$: {
								domain: "https://www.theguardian.com/world/world",
							},
						},
						{
							_: "Volodymyr Zelenskiy",
							$: {
								domain: "https://www.theguardian.com/world/volodymyr-zelenskiy",
							},
						},
						{
							_: "Vladimir Putin",
							$: {
								domain: "https://www.theguardian.com/world/vladimir-putin",
							},
						},
						{
							_: "Nato",
							$: {
								domain: "https://www.theguardian.com/world/nato",
							},
						},
					],
					pubDate: ["Sun, 31 Jul 2022 10:56:45 GMT"],
					guid: [
						"https://www.theguardian.com/world/live/2022/jul/31/russia-ukraine-war-drone-hits-russias-black-sea-fleet-hq-zelenskiy-urges-civilians-to-leave-donetsk-latest-updates",
					],
					"media:content": [
						{
							$: {
								width: "140",
								url: "https://i.guim.co.uk/img/media/c1755960040870b25d6c4ec746d92d200ff2322c/0_386_6048_3627/master/6048.jpg?width=140&quality=85&auto=format&fit=max&s=3eb858f01b4705e981d771f97a1402e3",
							},
							"media:credit": [
								{
									_: "Photograph: Sergey Bobok/AFP/Getty Images",
									$: {
										scheme: "urn:ebu",
									},
								},
							],
						},
						{
							$: {
								width: "460",
								url: "https://i.guim.co.uk/img/media/c1755960040870b25d6c4ec746d92d200ff2322c/0_386_6048_3627/master/6048.jpg?width=460&quality=85&auto=format&fit=max&s=31bf56fc92e54ed4072677b0105def03",
							},
							"media:credit": [
								{
									_: "Photograph: Sergey Bobok/AFP/Getty Images",
									$: {
										scheme: "urn:ebu",
									},
								},
							],
						},
					],
					"dc:creator": ["Emine Sinmaz"],
					"dc:date": ["2022-07-31T10:56:45Z"],
				},
			],
		},
	],
};
