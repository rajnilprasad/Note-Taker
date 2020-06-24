const app = require("express").Router();

// our sql connection
const connection = require("../db/connection");

app.get("/api/notes", (req,res) => {
    connection.query("SELECT * FROM notes", (err, response) => {
        return res.json(response);
    })
})


app.post("/api/notes", (req,res) => {

    connection.query("INSERT INTO notes SET ?", req.body,  (err, response) => {
        return res.json(response);
    })
})


app.delete("/api/notes/:id", (req,res) => {

    const id = req.params.id;

    connection.query("DELETE FROM notes WHERE ?", { id }, (err, response) => {
        return res.json(response);
    })
})

module.exports = app;

