const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello</h1>")
})

app.get("/contacts", function(request, response){
    response.send("Contact me at: aabrol_be20@thapar.edu")
})

app.get("/about", function(request, response){
    response.send("Know more about me here")
})

app.get("/hobbies", function(request, response){
    response.send("<ul><li>Code</li><li>Coffee</li><li></li></ul>")
})


app.listen(3000, function(){
    console.log("Server started on 3000")
}); 