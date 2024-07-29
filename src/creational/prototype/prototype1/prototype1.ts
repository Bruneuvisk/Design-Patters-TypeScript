/* eslint-disable prettier/prettier */
interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): this {
        const newObject = Object.create(this);
        return newObject;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Bruno', 30);
const person2 = person1.clone();
person1.addAddress(address1)
person2.name = 'Joana';
console.log(person2);
console.log(person2.name);