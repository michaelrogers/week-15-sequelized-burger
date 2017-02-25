const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgerController.js');

const app = express();
const port = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST with middleware package
app.use(methodOverride("_method"));

//Set template engine
app.engine(
    "handlebars",
    exphbs(
        { defaultLayout: "main" }
    )
);
app.set("view engine", "handlebars");


//Use routes defined in burger_controller
app.use("/", routes);
app.listen(port);