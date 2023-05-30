
var express = require('express');
require("dotenv").config()

const bodyparser = require("body-parser")

// let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets:false, specialChars: false })

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.post("/sendmessage",(req,res)=>{
    const phone = req.body.number
    const message = req.body.message

    sendMessage(phone,message,res)
})

function sendMessage(phone,message,res){

let otp = Math.floor(1000+Math.random()*9000)
var twilio = require("twilio")(process.env.sid, process.env.auth_token);

twilio.messages
    .create({
        from: "+13158608682",
        to: `+91${phone}`,
        body: `this is testing otp is ${otp} - ${message}`,
    })
    .then(function (response) { res.send("OTP sendmessage has sent!") })
    .catch(function (err) {
        console.log(err);
    });

}



    app.listen(5000,()=>{
        console.log("App is running on 5000 PORT")
    })