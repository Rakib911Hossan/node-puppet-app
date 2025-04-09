exports.getHome = (req, res) => {
    res.render("index", { title: "Home Page" });
};
