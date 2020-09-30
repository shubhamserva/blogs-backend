const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb')
const Post = require('./src/models/Post');
const uri = "mongodb+srv://shubham:test123@airline-server-j8sd4.mongodb.net/AirlinesData?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5555;
const app = express();
app.use(bodyParser.json());

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,
                        'useFindAndModify': false, 'useCreateIndex': true});
const connection = mongoose.connection;
connection.once("open", function() {
  //console.log("Connected to Database");
  app.listen(PORT,()=>{
        console.log("Blog server running at "+ PORT);
      })
  }).catch((err) => {
      //console.log("Not Connected to Database ERROR! ", err);
  });


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
const routes = require('./src/routes/routes');
app.use('/',routes);  



module.exports = app;