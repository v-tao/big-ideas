module.exports = {
    async getDecks(req, res, next) {
        res.send("getDecks");
    },

    async getDeckById(req, res, next) {
        res.send("getDeckById");
    },

    async createDeck(req, res, next) {
        res.send("createDeck");
    },

    async updateDeck(req, res, next) {
        res.send("updateDeck");
    },

    async deleteDeck(req, res, next) {
        res.send("deleteDeck");
    }
}