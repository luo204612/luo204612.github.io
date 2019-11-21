const express = require('express')
var app = express()

app.use(express.static('app'));

app.listen(8080,"192.168.1.109",()=>{
    console.log("server is running")
})

