var express=require('express');
var cors=require('cors');
var bodyparser=require('body-parser');
var mongoose=require('mongoose'  );
// var http =require('http-server');
const route =require('./route/routes.js');

const jwt = require("jsonwebtoken");

var app =express();
mongoose.connect('mongodb://localhost:27017/fruitss' , { useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log('db connected  1');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);
});
var PORT=3000 ;
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use('/',route);
app.get('/',(req,res)=>{
    res.send('get called ');
})
app.listen( PORT,()=>{
console.log('server started   on port number ' + PORT);

}); 