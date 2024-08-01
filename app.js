const express = require('express');
const bodyParser = require('body-parser');
const methodoveride = require("method-override")
const app = express()
const path = require('path')
const connectionMongoDB = require('./connection')
const blogRoutes = require('./routes/blog')


require('dotenv').config();
connectionMongoDB()


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodoveride("_method"))
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(blogRoutes)


app.listen(5555, () => {
    console.log("server running on 5555!")
})