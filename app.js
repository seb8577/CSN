const express   = require('express');
const exphbs    = require('express-handlebars');

const app = express();

// affiche css-images
app.use(express.static('public'));



// ROUTES
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/entreprise", (req, res) => {
    res.render("entreprise")
})

app.get("/realisations", (req, res) => {
    res.render("realisations")
})

app.get("/devis", (req, res) => {
    res.render("devis")
})

app.get("/ftechniques", (req, res) => {
    res.render("ftechniques")
})

app.get("/actualites", (req, res) => {
    res.render("actualites")
})



// SERVEUR LOCAL
app.listen(3000, function() {
    console.log("le serveur tourne sur le port 3000");
})