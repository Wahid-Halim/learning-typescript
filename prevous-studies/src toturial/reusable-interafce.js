"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const something = { quantity: 40 };
const printQuantity = (item) => {
    console.log(`the quantity of items is ${item}`);
};
const fruit = {
    name: "mango",
    quantity: 3,
};
const vehicle = {
    type: "car",
    quantity: 2,
};
const person = {
    name: "guy",
    age: 23,
};
printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(person);
// printQuantity({ quantity: 20, name: "cat" }); it's not working
//# sourceMappingURL=reusable-interafce.js.map