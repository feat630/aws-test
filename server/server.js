const express = require('express');
const app = express();
const routes = require('./Router/routes');

app.use('/', routes);

const port=4000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});