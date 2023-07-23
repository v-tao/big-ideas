const express = require("express"),
	  router  = express.Router();

const { getDecks, getDeckById, createDeck, updateDeck, deleteDeck } = require("../controllers/deck");

router.get("/", getDecks);

router.get("/:id", getDeckById);

router.post("/", createDeck);

router.put("/:id", updateDeck);

router.delete("/:id", deleteDeck);

module.exports = router;