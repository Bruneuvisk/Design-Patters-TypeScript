/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

const personPrototype = {
    firstName: 'Bruno',
    lastName: 'Henrique',
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
}

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Bruno';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());