const express = require("express");
const app = express();
const homeRoutes = require("./src/routes/homeRoutes");
const puppeteerRoutes = require("./src/routes/puppeteerRoutes");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", homeRoutes);
app.use("/puppet", puppeteerRoutes);

const PORT = process.env.PORT ||  3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
