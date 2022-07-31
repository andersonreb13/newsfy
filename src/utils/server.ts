import express, { Express } from "express";

const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("../routes/");

dotenv.config();

const PORT = process.env.PORT || 3001;

export const createServer = () => {
	const app: Express = express();

	app.use(helmet());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use("/api", routes);

	return app;
};
