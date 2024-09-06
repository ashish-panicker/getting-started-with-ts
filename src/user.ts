export class User {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }
  sayHello() {
    console.log(`Hello, my name is ${this._name} is ${this._age} years old`)
  }
  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get age() {
    return this._age
  }

  set age(age: number) {
    this._age = age
  }
}
