import { HasFormatter } from "../interfaces/HasFormatter.js"

// classes 
export class Invoice implements HasFormatter {
    // readonly client: string;
    // // read only and we can't change it. both in and out side of class
    // public details: string;
    // private amount: number;
    // // we can't access to private form out side of 
    // // the class
  
    constructor(
      readonly client: string,
      private details: string,
      public amount: number,
    ){}
  
    format() {
      return `format: ${this.client} owes $${this.amount} for ${this.details}`
    }
  }