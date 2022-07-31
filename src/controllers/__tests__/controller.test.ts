import request from "supertest";
import { createServer } from "../../utils/server";
import {
	articleResultSet,
	rawContentJsonMock,
} from "../../__mocks__/dataMockProvider";

const service = require("../../services/");

const app = createServer();

describe("Test Controller layer", () => {
	jest.spyOn(service, "importData").mockReturnValueOnce(rawContentJsonMock);

	test("When called /POST to importData, should", async () => {
		const response = await request(app).post(
			"/api/articles/import?siteRssUrl=https://www.theguardian.com/world/europe-news/rss"
		);
		expect(response.statusCode).toBe(201);
		expect(response.body).toEqual(rawContentJsonMock);
	});

	test("When called /GET to listArticles, should return a list of Articles", async () => {
		jest.spyOn(service, "getArticles").mockReturnValueOnce(
			articleResultSet
		);
		const response = await request(app).get("/api/articles");

		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(articleResultSet);
	});

	test("When /POST fail, should return error 500", async () => {
		const response = await request(app).post("/api/articles/import");
		expect(response.statusCode).toBe(500);
	});

	test("When /GET fail, should return error 500", async () => {
		jest.spyOn(service, "getArticles").mockImplementation(() => {
			throw new Error();
		});
		const response = await request(app).get("/api/articles");

		expect(response.statusCode).toBe(500);
	});
});
