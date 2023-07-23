module.exports = {
    async getIdeas(req, res, next) {
        res.send("getIdeas");
    },

    async getIdeaById(req, res, next) {
        res.send("getIdeaById");
    },

    async createIdea(req, res, next) {
        res.send("createIdea");
    },

    async updateIdea(req, res, next) {
        res.send("updateIdea");
    },

    async deleteIdea(req, res, next) {
        res.send("deleteIdea");
    }
}