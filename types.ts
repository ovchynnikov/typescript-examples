const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 5
const float: number = 5.5
const num: number = 5e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Oleksii', 123]

// Any
let variable: any = 5
// ...
variable = 'New String'
variable = []

// ====
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Papazoglo')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {

  }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined