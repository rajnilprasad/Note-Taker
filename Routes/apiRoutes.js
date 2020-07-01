const app = require("express").Router();
const store = require("../db/store.js");
// our sql connection
const connection = require("../db/connection");

// Note
app.get("/notes", function(req, res) {
    store.getNotes()
    .then(notes => res.json(notes))   
});
// Post Note
app.post("/notes", function (req, res) {
    store.addNote(req.body)
    .then(note => res.json(note))   
});
// Delete Note 
app.delete("/notes/:id", function(req, res) {
    store.removeNote(req.params.id)
    .then(() => res.json({ok: true}))   
});

module.exports = app;

