import { rawContentJsonMock } from "../../__mocks__/dataMockProvider";

const service = require("../");
const repository = require("../../repository");

describe("Test Service layer", () => {
	test("When called service > getArticles, should return an Article list", async () => {
		const spyRepository = jest
			.spyOn(repository, "getAllArticles")
			.mockReturnValue(rawContentJsonMock);

		const result = await service.getArticles();

		expect(spyRepository).toHaveBeenCalled();
		expect(result).toEqual(rawContentJsonMock);
	});
});
