const { getNotes } = require("../controllers/notesController");
const router = require("express").Router();

router.get("/", getNotes);
router.get("/:id", getNotes);

module.exports = router;
