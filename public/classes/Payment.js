// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `format: ${this.recipient} owed $${this.amount} for ${this.details}`;
    }
}
