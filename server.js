const express = require("express");
const bodyParser = require("body-parser");

// these are now in other files:

// const path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// link the server to functions that route data searches
//and retrieval

require("./routes/html.js")(app);
require("./routes/tables.js")(app);


app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT)
});


//I don't need to export anything now that the paths
//are defined elsewhere.  They are included as part of the 
//server by 'require'

// module.exports = function(app){
// //use this to export data    
// }
