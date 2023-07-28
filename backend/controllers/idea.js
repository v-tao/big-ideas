const pool = require("../pool");

module.exports = {
    async getIdeas(req, res, next) {
        const query = `SELECT * FROM ideas;`;
        try {
            res.json((await pool.query(query))["rows"]);
        } catch (err) {
            console.log(err);
        }
    },

    async getIdeaById(req, res, next) {
        const query = `SELECT * FROM ideas WHERE id=${req.params.id};`;
        try {
            res.json((await pool.query(query))["rows"][0]);
        } catch (err) {
            console.log(err);
        }
    },

    async createIdea(req, res, next) {
        const query = `INSERT INTO ideas
            (text, source)
            VALUES('${req.body.text}', '${req.body.source}');`;
        try {
            await pool.query(query);
            res.json({
                message: "OK",
                status: 200,
            });
        } catch (err) {
            console.log(err);
        }
    },

    async updateIdea(req, res, next) {
        const query = `UPDATE ideas
            SET 
            text='${req.body.text}',
            source='${req.body.source}'
            WHERE id=${req.params.id};`;
        try {
            await pool.query(query);
            res.json({
                message: "OK",
                status: 200,
            });
        } catch (err) {
            console.log(err);
        }
    },

    async deleteIdea(req, res, next) {
        const query = `DELETE from ideas WHERE id=${req.params.id}`;
        try {
            await pool.query(query);
            res.json({
                "message": "OK",
                "status": 200,
            });
        } catch (err) {
            console.log(err);
        }
    }
}