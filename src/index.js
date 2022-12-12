const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World !");
})

app.post("/add", (req, res) => {

    let firstNum = req.body.num1;
    let secondNum = req.body.num2;
    let total = firstNum + secondNum

    if (typeof firstNum === "string" || typeof secondNum === "string") {
        return res.send({
            Status: "Error",
            message: "Invalid Data types"
        })

    } else if (firstNum < -1000000 || secondNum < -1000000 || total < -1000000) {
        return res.send({
            Status: "Error",
            message: "Underflow"
        })
    } else if (firstNum > 1000000 || secondNum > 1000000 || total > 1000000) {
        return res.send({
            Status: "Error",
            message: "Overflow"
        })
    } else {
        res.send({
            status: "SUCCESS",
            message: "the sum of given two numbers",
            Sum: total
        })
    }

})

app.post("/sub", (req, res) => {

    let firstNum = req.body.num1;
    let secondNum = req.body.num2;
    let total = firstNum - secondNum

    if (typeof firstNum === "string" || typeof secondNum === "string") {
        return res.send({
            Status: "Error",
            message: "Invalid Data types"
        })
    } else if (firstNum < -1000000 || secondNum < -1000000 || total < -1000000) {
        return res.send({
            Status: "Error",
            message: "Underflow"
        })
    } else if (firstNum > 1000000 || secondNum > 1000000 || total > 1000000) {
        return res.send({
            Status: "Error",
            message: "Overflow"
        })
    } else {
        res.send({
            status: "SUCCESS",
            message: "the sub of given two numbers",
            Sum: total
        })
    }

})

app.post("/multiply", (req, res) => {

    let firstNum = req.body.num1;
    let secondNum = req.body.num2;
    let total = firstNum * secondNum

    if (typeof firstNum === "string" || typeof secondNum === "string") {
        return res.send({
            Status: "Error",
            message: "Invalid Data types"
        })

    } else if (firstNum < -1000000 || secondNum < -1000000 || total < -1000000) {
        return res.send({
            Status: "Error",
            message: "Underflow"
        })

    } else if (firstNum > 1000000 || secondNum > 1000000 || total > 1000000) {
        return res.send({
            Status: "Error",
            message: "Overflow"
        })

    } else {
        res.send({
            status: "SUCCESS",
            message: "the multiplication of given two numbers",
            Sum: total
        })
    }

})

app.post("/divide", (req, res) => {

    let firstNum = req.body.num1;
    let secondNum = req.body.num2;
    let sum = firstNum >= 0 ? "Positive Infinity" : "Negative Infinity";
    let total = secondNum !== 0 ? firstNum / secondNum : sum;

    if (typeof firstNum === "string" || typeof secondNum === "string") {
        return res.send({
            Status: "Error",
            message: "Invalid Data types"
        })
    } else if (firstNum < -1000000 || secondNum < -1000000 || total < -1000000) {
        return res.send({
            Status: "Error",
            message: "Underflow"
        })
    } else if (firstNum > 1000000 || secondNum > 1000000 || total > 1000000) {
        return res.send({
            Status: "Error",
            message: "Overflow"
        })
    } else {
        res.send({
            status: secondNum !== 0 ? "SUCCESS" : "Error",
            message: secondNum !== 0 ? "the division of given two numbers" : "Can not divide by zero",
            Sum: total
        })
    }

})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;