const mysql = require("mysql");

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "!@#Qwezx13",
	database: "newsfy",
});

conn.connect((e: any) => {
	if (e) {
		console.log("❌ Oh no! Can not connect on MySQL!\n");
		throw e;
	}
	console.log("🔋 Connected on MySQL.");
});

module.exports = conn;
