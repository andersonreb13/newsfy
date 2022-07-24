const express = require("express");
const controller = require("../controllers");

const router = express.Router();

router.route("/articles/import").post(controller.importData);
router.route("/articles").get(controller.listArticles);

module.exports = router;
