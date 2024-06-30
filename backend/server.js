const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {PORT, mongoDBURL} = require('./config');

app.use(express.json());
app.use('/chat', require('./Routes/ChatRoute'));
app.use('/message', require('./Routes/MessageRoute'));

mongoose.connect(mongoDBURL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error("Error connecting to Mongoose: ", err.message);
    });

app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`);
});