function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const personPrototype = {
    firstName: 'Bruno',
    lastname: 'Henrique',
    age: 30,
    fullName(): {
       return `${this.firstName} ${this.lastname}`;
    }, 
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'Oie';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = Person;

const person1 = new Person('Bruno', 'Henrique', 30);
console.log(person1);
console.log(person1.fullName());