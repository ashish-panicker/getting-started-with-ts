export class User {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this._name} is ${this._age} years old`);
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
//# sourceMappingURL=user.js.map