const express = require("express");
    cors = require("cors");
const app = express();
const deckRoutes = require("./routes/deck");
    ideaRoutes = require("./routes/idea");
const pool = require("./pool");

app.use(express.json());

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use("/decks", deckRoutes);
app.use("/ideas", ideaRoutes);

app.listen(3000, () => {
    console.log("Server started");
})