import { articleFactory } from "../factory";
import { rawContentJsonMock } from "../../__mocks__/dataMockProvider";

describe("Test articleFactory", () => {
	test("When invoqued, should return a valid article's list", () => {
		const entryList = rawContentJsonMock.channel[0].item;

		const articles = articleFactory(entryList);

		expect(entryList.length).toBe(articles.length);
	});
});
