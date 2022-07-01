const person = {
    firstName: 'John',
    lastName: 'Doe',
    wife: undefined,
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

const json = JSON.stringify(person);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
