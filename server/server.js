const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    cors(),
    bodyParser.urlencoded({ extended: true })
);

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Abtion test CPH airport flights app" });
});

require('./routes/flightinfo.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});