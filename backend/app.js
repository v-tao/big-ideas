const express = require("express");
const app = express();
const deckRoutes = require("./routes/deck");
    ideaRoutes = require("./routes/idea");
const pool = require("./pool");

app.use(express.json());

app.use("/decks", deckRoutes);
app.use("/ideas", ideaRoutes);

app.use(cors({
    origin: "http://localhost:4200"
}));

app.listen(3000, () => {
    console.log("Server started");
})