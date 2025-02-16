const puppeteerService = require("../services/puppeteerService");

exports.takeScreenshot = async (req, res) => {
    try {
        const imagePath = await puppeteerService.captureScreenshot();
        res.send(`Screenshot saved at: ${imagePath}`);
    } catch (error) {
        res.status(500).send("Error capturing screenshot");
    }
};
