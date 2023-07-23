const express = require("express"),
	  router  = express.Router();

const { getDecks, getDeckById, addIdea, createDeck, updateDeck, removeIdeaFromDeck, deleteDeck } = require("../controllers/deck");

router.get("/", getDecks);

router.get("/:id", getDeckById);

router.post("/:deck_id/ideas/:idea_id", addIdea);

router.post("/", createDeck);

router.put("/:id", updateDeck);

router.delete("/:deck_id/ideas/:idea_id", removeIdeaFromDeck);

router.delete("/:id", deleteDeck);

module.exports = router;