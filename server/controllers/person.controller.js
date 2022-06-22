const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello friends!"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body; // destructuring assignment
    console.log(`${request.body.firstName}`);
    Person.create(
        request.body
    )
        .then(person => response.json(person)) // if we get here, we have a new person

        .catch(err => response.json(err)); // if we get here, we have an error
}
