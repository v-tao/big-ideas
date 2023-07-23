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
        const query = `SELECT * FROM decks WHERE id=${req.params.id};`;
        try {
            res.json((await pool.query(query))["rows"]);
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
            res.send("Deck successfully created");
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
            res.send("Deck successfully updated");
        } catch (err) {
            console.log(err);
        }
    },

    async deleteDeck(req, res, next) {
        const query = `DELETE FROM ideas WHERE id=${req.params.id};`;
        try {
            await pool.query(query);
            res.send("Deck successfully deleted");
        } catch (err) {
            console.log(err);
        }
    }
}