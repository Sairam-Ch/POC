

//Required NPM
var express = require('express'),
    http = require('http'),
    path = require('path'),
    conf =  require('./conf.js');
    body_parser = require('body-parser'),
    session = require('express-session'),
    mongo_store = require("connect-mongo")(session),
    multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty(),
    app = express(),
    server = http.createServer(app);



//Global variable
global.appRoot = path.resolve(__dirname);



//ExpressJS middleware
app.use(express.static(__dirname + '/www'));
app.use(session({
    secret: 'keyboard cat',
    cookie  : { maxAge  : 24 * 60 * 60 * 1000} // duration - 1 day
}));


app.use(body_parser.urlencoded({
    extended: false
}));
app.use(body_parser.json());





var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var url =conf.database.url;

console.log("url", url);
MongoClient.connect(url, function(err, db) {
    app.db = db;
});

var hostPort=Number(conf.web.port);

server.listen(hostPort);
console.log("Server Running port:"+hostPort);


var WebRoutes = require("./routes/ui-routes.js");
var webRoutes = new WebRoutes(app);
webRoutes.init();
