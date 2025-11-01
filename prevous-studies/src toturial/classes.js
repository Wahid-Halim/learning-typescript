"use strict";
// classes
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    title;
    price;
    toppings = [];
    base = "classic";
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const newPizza = new Pizza("italian pizza", 100);
newPizza.addTopping("mushrooms");
newPizza.addTopping("olive");
newPizza.removeTopping("olive");
newPizza.selectBase("thin");
// newPizza.selectBase("crispy"); // error it's not type Base
console.log(newPizza);
//# sourceMappingURL=classes.js.map