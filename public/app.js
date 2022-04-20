import { Invoice } from "./classes/invoice.js";
import { ListTemaplte } from "./classes/ListTempalte.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("youshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: "Benyamin",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
const invOne = new Invoice("Sara", "work", 400);
const invTwo = new Invoice("Benyamin", "shool", 100);
// only Invoice can add to this array
let invoices = [];
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
const anchor = document.querySelector("a");
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemaplte(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
