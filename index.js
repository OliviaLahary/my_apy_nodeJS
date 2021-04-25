const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use('/api', routes);


app.listen(3000, () => console.log ("express server is running")); 

