import { Invoice } from "./classes/invoice.js";
import { ListTemaplte } from "./classes/ListTempalte.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("youshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): void;
}

const me: IsPerson = {
  name: "Benyamin",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

console.log(me);

const invOne = new Invoice("Sara", "work", 400);
const invTwo = new Invoice("Benyamin", "shool", 100);

// only Invoice can add to this array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.format());
});

// const anchor = document.querySelector("a");
// if (anchor) {
//   console.log(anchor.href);
// }

// ! a way to run time check and it say's if exises
const anchor = document.querySelector("a")!;
// console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemaplte(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});
