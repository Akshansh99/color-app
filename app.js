const express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("WORKING");
});