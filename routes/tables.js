//require the objects we're using to store data

var tableResArray = require("../data/tableArray.js");
var waitListArray = require("../data/waitingArray.js");

// this function stores and retrieves data from a new, virtual
// directory called /api/.  There are two virtual subdirectories
// of this:  /api/tables  and /api/wait.  The above arrays are
//object arrays that determine the form of the data. 

module.exports = function(app){

    //the next two 'get' actions retrieve the stored data

app.get("/api/tables", function(req, res){
  res.json(tableResArray);
}); 

app.get("/api/wait", function(req, res){
  res.json(waitListArray);
});

 // the next two 'post' actions store the data that has
 // been input to the html 'form' page to /api/tables
 // req = data received (request);
 // res = data being returned (response)

 app.post("/api/tables",function(req,res){
   if (tableResArray.length < 5){
       tableResArray.push(req.body);
       res.json(true);
   } else {
       waitListArray.push(req.body);
       res.json(false);
   }
 });

 //question:  when does data ever get posted to /api/wait ? Is
// it going there just because data has been pushed to waitListArray?


}   //end of module.exports