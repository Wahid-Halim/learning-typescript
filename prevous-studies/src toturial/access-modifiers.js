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
    //   constructor(private title: string, private price: number) {} is the same as the top example the variable are accessible inside class
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
// newPizza.title  is not accessible because it's private
console.log(newPizza);
//# sourceMappingURL=access-modifiers.js.map