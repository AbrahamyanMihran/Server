"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}



app.get("/factorial/:number", (req , res) =>{
    let x = req.params["number"];
    let factorial_of_x=factorial(x*1);
    console.log(factorial_of_x);
    res.send(factorial_of_x.toString());
});

app.listen(port , err =>{
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});





