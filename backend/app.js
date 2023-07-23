const express = require("express");
const app = express();
const deckRoutes = require("./routes/deck");
    ideaRoutes = require("./routes/idea");

app.use("/decks", deckRoutes);
app.use("/ideas", ideaRoutes);

app.listen(3000, () => {
    console.log("Server started");
})