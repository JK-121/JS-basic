//Object Destructuring

function getPerson() {
    return {
        firstName: "John",
        lastName: "Bur",
        age: 37,
        email: "john@gmail.com",
        city: "seoul",
        country: "Republic of korea"
    };
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);

var {
    firstName,
    lastName
} = getPerson();

console.log(firstName);
console.log(lastName);