import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `format: ${this.recipient} owed $${this.amount} for ${this.details}`;
  }
}
