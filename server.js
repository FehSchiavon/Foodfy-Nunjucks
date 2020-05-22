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

    return res.render('description', { recipes })
})

// Assim de usa Params 
// server.get("/recipes/:id", function (req, res) {
//     res.send('Criando index' + req.params.id)
// })


// server.get("/recipes/:index", function (req, res) {

//     const recipeIndex = req.params.index
//     return res.render("recipesDescription", { item: receitas[recipeIndex] })
// })

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index
    console.log(recipeIndex)

    // const recipes = data[0]
    // console.log(recipes)

    return res.render("recipesDescription", { item: recipes[0] })
})

// server.get("/recipes/:index", function (req, res) {

//     const recipes = data;

//     const recipeIndex = req.params.index;
  
//     // if (!recipes[receipeIndex]) {
//     //     return res.status(404).render("not-found");
//     // }

//     return res.render('recipe', {
//         recipe: receipes[receipeIndex]
//     })
// })
  

server.listen(3000, function() {
    console.log("server is running")
})