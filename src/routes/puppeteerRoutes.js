const express = require("express");
const router = express.Router();
const puppeteerController = require("../controllers/puppeteerController");

router.get("/screenshot", puppeteerController.takeScreenshot);

module.exports = router;
