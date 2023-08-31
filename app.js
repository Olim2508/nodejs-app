const express = require("express");

const app = express()

app.listen(3003)

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname})
})

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", {root: __dirname})
})

//redirect
app.get("/about-me", (req, res) => {
    res.redirect("/about")
})

//404
app.use((req, res) => {
    res.sendFile("./views/404.html", {root: __dirname})
})
