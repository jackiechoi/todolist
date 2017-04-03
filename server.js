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

var todoSchema = new mongoose.Schema({
    text: String
});

var todo = mongoose.model("todo_collection", todoSchema);

app.get('/', function(req, res){
	res.redirect('index');
})
// app.get('/index', function(req, res){
// 	todo.find({}, function(err, allTodos){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			res.render('index', {allTodos: allTodos})
// 		}
// 	})
// })
// app.post('/index', function(req, res){
// 	console.log(req.body);
// })

app.listen(process.env.PORT || 3001, function(){
	console.log("todolist working!")
})