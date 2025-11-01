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
const pizzaOne = new Pizza("italian pizza", 100);
const pizzaTwo = new Pizza("italian pizza", 100);
const addMushroomsToPizzas = (pizzas) => {
    for (const p of pizzas) {
        p.addTopping("mushrooms");
    }
};
addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
//# sourceMappingURL=class-as-type.js.map