const express   = require('express');
const exphbs    = require('express-handlebars');

const app = express();

// affiche css-images
app.use(express.static('public'));



// ROUTE
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", function (req, res) {
    res.render("index")
})

app.get("/entreprise", function(req, res) {
    res.render("entreprise")
})



app.listen(3000, function() {
    console.log("le serveur tourne sur le port 3000");
})