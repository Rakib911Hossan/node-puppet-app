const puppeteer = require("puppeteer");

exports.captureScreenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    const imagePath = "screenshot.png";
    await page.screenshot({ path: imagePath });
    await browser.close();
    return imagePath;
};
