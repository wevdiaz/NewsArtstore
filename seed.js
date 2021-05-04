const User = require("./src/app/models/User");
const faker = require("faker");
const { hash } = require("bcryptjs");

let usersIds = [];

async function createUsers() {
    const users = [];
    const password = await hash("1111", 8);

    while (users.length < 3) {

        users.push({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password,
            cpf_cnpj: faker.datatype.number(99999999),
            cep: faker.datatype.number(99999999),
            address: faker.address.streetName()
        });
    }
    
    const usersPromise = users.map( user => User.create(user));

    usersIds = await Promise.all(usersPromise);
}

createUsers();