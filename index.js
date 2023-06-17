const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');


const app = express();
const path = require('path')
 //use express to get data in json format

 app.use(express.json()); 

 const PORT = process.env.PORT || 5500; 

 app.use(cors());

 const listItemRoute = require('./routes/listItems');


 const _dirname = path.dirname("")
 const buildPath = path.join(_dirname  , "../solar-view/build");
 
 app.use(express.static(buildPath))
 
 app.get("/*", function(req, res){
 
     res.sendFile(
         path.join(__dirname, "../solar-view/build/index.html"),
         function (err) {
           if (err) {
             res.status(500).send(err);
           }
         }
       );
 
 })
 



 mongoose.connect(process.env.DB_CONNECT)
 .then(() => console.log("Database Connected"))
 .catch(err => console.log(err)) 

 app.use('/', listItemRoute);

 app.listen(PORT, ()=> console.log("server Connected"));

