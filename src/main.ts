// Type inference
let userName: string = 'user'
console.log(typeof userName) // string

// Error
// userName = 10

let age: number = 10
let isStudent: boolean = true
let hobbies: string[] = ['reading', 'coding']

// Create a type
type Gender = 'male' | 'female'

let gender: Gender = 'male'
enum Month {
  JAN = 1,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC,
}

let month: Month = Month.JUN

let x: any
x = 'hello'
x = 10
x = true
x = ['a', 'b']

const sum = (n1: number, n2: number): number => {
  return n1 + n2
}

function greet(name: string): void {
  console.log(`Hello ${name}`)
}

// Declate a Book type
type Book = {
  title: string
  author: string
  genre: string
}

// Declare a type Course
interface Course {
  title: string
  duration: number
  price?: number // optional
}

const book: Book = {
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Adventure',
}

const course: Course = {
  title: 'React',
  duration: 40,
}

/**
 * type vs interface
 * - type is more flexible
 * - interface is more strict
 * - use interface for objects
 * - use type for union types, tuples, and any other types
 */

// Union types
let mixed: number | string
mixed = 10
mixed = 'hello'

let mixedArray: (number | string)[]
mixedArray = [10, 'hello']

// Tuple
let person: [string, number, Gender, boolean]
person = ['user', 30, 'female', true]

// Type assertion
let message: any = 'Hello'
let messageLength = (message as string).length
// another comment
