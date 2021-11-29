const express = require("express");
const app = express()

const vaccine = require("./routes/vacinas.routes")
app.use("/vaccines", vaccine);


app.use(express.json())

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")

    next()
})

app.options("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Methods",
    "POST,GET,OPTIONS,PATCH");
    res.send("send some thing whatever")
})

app.use("/", vaccine);

module.exports = { app }