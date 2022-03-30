const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    credentials:true, 
    optionsSuccessStatus: 200,
    methods:"POST, GET, PATCH, DELETE, OPTIONS"
}
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', cors(), (req, res) => {
    res.send("It works!");
});

const routes = require('./api/routes/reviewRoutes');

app.use('/review', cors(), routes);

module.exports = app;