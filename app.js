const express = require("express");

const app = express()

app.listen(3003)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

//redirect
app.get("/about-me", (req, res) => {
    res.redirect("/about")
})

//404
app.use((req, res) => {
    res.render("404")
})
