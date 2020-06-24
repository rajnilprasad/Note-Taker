const app = require("express").Router();
const path = require("path");

app.get("/notes", (req,res) => {
    res.sendfile(path.join(__dirname, "../public/notes.html"))
})

app.get("/", (req,res) => {
    res.sendfile(path.join(__dirname, "../public/index.html"))
})

module.exports = app;