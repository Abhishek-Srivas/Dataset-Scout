const express = require('express');
const app = express();
const sampleRoute = require('./routes/sample')
const PORT = process.env.PORT || 3000;

app.use(sampleRoute);
app.listen(PORT);
