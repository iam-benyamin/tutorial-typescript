const me = {
    name: "Benyamin",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    }
};
console.log(me);
import { Invoice } from "./classes/invoice.js";
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
