require('dotenv').config({path:'./config.env'});

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('Database connected');
})

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server has been started on port " + port);
});

