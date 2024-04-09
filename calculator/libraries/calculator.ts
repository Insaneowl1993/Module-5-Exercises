import { log } from './logger'

export class Calculator {
    id: number
    constructor() {
    //this.id = Date.now()
    this.id - Math.floor(Math.random() * 10000)
    }
    #log = (value: number | string) => {
    log(`Calculator: ${this.id}`, value)
    }
    add(num1 : number, num2 : number) {
    const value = num1 + num2
    this.#log(value)
    return value;
    }
    
   }