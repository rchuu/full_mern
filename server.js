const express = require('express');
const cors = require('cors'); // for cross-origin resource sharing
const app = express(); // create an instance of express

require('./server/config/mongoose.config'); // connect to our database

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000;
require('./server/routes/person.routes')(app); // load our routes and pass in our app and fully configured passport

app.listen(port, () => console.log("we're listening on port 3000"));