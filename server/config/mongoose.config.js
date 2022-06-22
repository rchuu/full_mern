const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', { // connect to our database
    useNewUrlParser: true, // this is a new option in mongoose 5.x
    useUnifiedTopology: true // this is a new option in mongoose 5.x
})
    .then(() => console.log("congrats database connected bro!")) // if we get here, we're connected to the database
    .catch(err => console.log("too bad, got an error bro!", err)); // if we get here, we have an error

