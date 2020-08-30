const express = require("express");
const fetch = require("node-fetch");
require('dotenv').config()

const app = express();
const apiUrl = "http://newsapi.org/v2/";

const buildUrl = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    if(req.url === "/init") {
        req.apiUrl = `${apiUrl}/top-headlines?country=gb&apiKey=${process.env.API_KEY}`;
    } else if(req.query.q) {
        req.apiUrl = `${apiUrl}/everything?q=${req.query.q}&apiKey=${process.env.API_KEY}`;
    }
    next();
}

app.use(buildUrl);

const getNews = async (req, res) => {
    try {
        const response = await fetch(req.apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(400).send(err);
    }
};

app.get("/init", getNews);

app.get("/search", getNews);

app.listen(3001, () => {
    console.log("Listening on port 3001...");
});