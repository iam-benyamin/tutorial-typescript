// classes 
export class Invoice {
    // readonly client: string;
    // // read only and we can't change it. both in and out side of class
    // public details: string;
    // private amount: number;
    // // we can't access to private form out side of 
    // // the class
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `format: ${this.client} owes $${this.amount} for ${this.details}`;
    }
}
