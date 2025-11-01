"use strict";
// classes
Object.defineProperty(exports, "__esModule", { value: true });
class MenuItem {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItem {
    toppings = [];
    base = "classic";
    constructor(title, price) {
        super(title, price);
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
const pizza = new Pizza("mario special", 20);
// console.log(pizza.details); we can access it like a property because of (get)
const printMenuItem = (item) => {
    console.log(item.details);
};
printMenuItem(pizza);
//# sourceMappingURL=inheritance.js.map