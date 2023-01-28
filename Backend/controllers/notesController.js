const notes = require("../data/dummyNotes");

exports.getNotes = (req, res, next) => {
    if (!req.params.id) return res.json(notes);
    const note = notes.find((n) => n._id === req.params.id);
    if (!note) return res.json({ error: "Please enter valid URL" });
    res.json(note);
};
