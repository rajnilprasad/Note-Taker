const router = require("express").Router();
const store = require("../db/store.js");

// Note
router.get("/notes", function(req, res) {
    store.getNotes()
    .then(notes => res.json(notes))   
});
// Post Note
router.post("/notes", function (req, res) {
    store.addNote(req.body)
    .then(note => res.json(note))   
});
// Delete Note 
router.delete("/notes/:id", function(req, res) {
    store.removeNote(req.params.id)
    .then(() => res.json({ok: true}))   
});

module.exports = router;

