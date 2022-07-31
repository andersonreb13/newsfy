import { createServer } from "./utils/server";

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = createServer();

app.listen(PORT, async () => {
	console.log(`🚀 Running on ${PORT}.`);
}).on("error", (e) => {
	console.log("❌ Oh no! Can not start the app.\n");
	throw e;
});
