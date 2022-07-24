import express, { Express } from "express";

const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
	console.log(`🚀 Running on ${PORT}.`);
}).on("error", (e) => {
	console.log("❌ Oh no! Can not start the app.\n");
	throw e;
});
