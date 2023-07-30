const express = require("express");
    cors = require("cors");
require('dotenv').config();
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

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'zrugOxx0PqHgX220rNyl0YvEkT6MtMGj',
  issuerBaseURL: 'https://dev-edxfvmyn17fhrpuf.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(3000, () => {
    console.log("Server started");
})