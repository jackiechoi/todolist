var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

var connectionString = mongoose.connect("mongodb://jackie:1111@ds145230.mlab.com:45230/todolist");

// Body parser for forms
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/public", express.static("public"));

//create a user schema
var todoSchema = new mongoose.Schema({
    content: String
});

//create a user model
var todoModel = mongoose.model("todo", todoSchema);

app.get('/', function(req, res){
	res.render('index');
})


app.listen(process.env.PORT || 3001, function(){
	console.log("todolist working!")
})