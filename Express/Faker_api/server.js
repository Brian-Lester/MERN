const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker');
const createPerson = () => {
    const newFake = {
        firstName: faker.person.firstName(),
        lastName:  faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email : faker.internet.email(),
        password: faker.internet.password(),
        _id : faker.database.mongodbObjectId()
        };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id : faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address : faker.location.streetAddress({ useFullAddress: true })
        };
    return newFake;
};
    const newUser = createPerson();
    const newCompany = createCompany();
    const merged = Object.assign({}, newUser, newCompany)  
    
// req is shorthand for request
// res is shorthand for response
app.get("/api/user/new", (req, res) => {
    res.json( newUser );
});

app.get("/api/company/new", (req, res) => {
    res.json( newCompany );
});


app.get("/api/user/company/new", (req, res) => {
    res.json( merged );
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );