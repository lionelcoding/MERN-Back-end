const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.pgbaw.mongodb.net/mern-back',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err)=>{
        if (!err)
        console.log("Mongodb connected")
        else 
        console.log("connection :" + err)
    })