const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/aboutme", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/aboutme.html"));
    });

    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio.html"));
    });

    app.get("/tech", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/tech.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact.html"));
    });

    app.get("/resume", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/docs/samanthacappsresume.pdf"));
    });

    app.get("/hangman", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/Hangman-Game1/index.html"));
    });

    app.get("/trivia", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/TriviaGame1/index.html"));
    });

    app.get("/pokemon", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/pokemon1/index.html"));
    });

    app.get("/rpsls", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/RPS-Multiplayer1/index.html"));
    });

    app.get("/holdingroom", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/RPS-Multiplayer1/holdingroom.html"));
    });

    app.get("/game", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/RPS-Multiplayer1/game.html"));
    });

    app.get("/ria", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/Ria/index.html"));
    });
};