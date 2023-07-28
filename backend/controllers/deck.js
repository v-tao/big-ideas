const pool = require("../pool");

module.exports = {
    async getDecks(req, res, next) {
        const query = `SELECT * FROM decks;`;
        try {
            res.json((await pool.query(query))["rows"]);
        } catch (err) {
            console.log(err);
        }
    },

    async getDeckById(req, res, next) {
        const queryDeck = `SELECT * FROM decks WHERE id=${req.params.id};`;
        const queryIdeas = `SELECT ideas.* FROM ideas
            JOIN deck_ideas ON ideas.id=deck_ideas.idea_id
            WHERE deck_ideas.deck_id=${req.params.id};`;
        try {
            let deck = (await pool.query(queryDeck))["rows"][0];
            let deckIdeas = (await pool.query(queryIdeas))["rows"];
            deck["ideas"] = deckIdeas;
            res.json(deck);
        } catch (err) {
            console.log(err);
        }
    },

    async createDeck(req, res, next) {
        const query = `INSERT into decks
            (title, description)
            VALUES('${req.body.title}', '${req.body.description}');`;
        try {
            await pool.query(query);
            res.json({
                message: "Deck successfully created.",
                status: 200
            })
        } catch (err) {
            console.log(err);
        }
    },

    async addIdea(req, res, next) {
        const query = `INSERT into deck_ideas
            (deck_id, idea_id)
            VALUES(${req.params.deck_id}, ${req.params.idea_id});`
        try {
            await pool.query(query);
            res.json({
                message: "Idea successfully added to deck.",
                status: 200
            })
        } catch (err) {
            console.log(err);
        }
    },

    async updateDeck(req, res, next) {
        const query = `UPDATE decks
            SET
            title='${req.body.title}',
            description='${req.body.description}'
            WHERE id=${req.params.id};`
        try {
            await pool.query(query);
            res.json({
                message: "Deck successfully updated.",
                status: 200
            })
        } catch (err) {
            console.log(err);
        }
    },

    async removeIdeaFromDeck(req, res, next) {
        const query = `DELETE FROM deck_ideas 
            WHERE deck_id=${req.params.deck_id}
            AND idea_id=${req.params.idea_id};`;
        try {
            await pool.query(query);
            res.json({
                message: "Idea successfully removed.",
                status: 200
            })
        } catch (err) {
            console.log(err);
        }
    },

    async deleteDeck(req, res, next) {
        const query = `DELETE FROM decks WHERE id=${req.params.id};`;
        try {
            await pool.query(query);
            res.json({
                message: "Deck successfully deleted.",
                status: 200
            })
        } catch (err) {
            console.log(err);
        }
    }
}