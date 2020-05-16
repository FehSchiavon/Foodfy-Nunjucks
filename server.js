const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render('index', { recipes })
})

server.get("/about", function (req, res) {
    return res.render('about')
})

server.get("/recipes", function (req, res) {
    return res.render('recipes', { recipes })
})

server.get("/description", function (req, res) {
    return res.render('description')
})

server.listen(3000, function() {
    console.log("server is running")
})