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
    format() {
        let formatted = this.details + "\n";
        // base
        formatted += `pizza on a ${this.base} base `;
        //toppings
        if (this.toppings.length < 1) {
            formatted += "with no toppings";
        }
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(", ")}`;
        }
        return formatted;
    }
}
const pizza = new Pizza("mario special", 20);
function printFormatted(val) {
    console.log(val.format());
}
pizza.addTopping("mushroom");
pizza.addTopping("olive");
pizza.addTopping("tomato");
printFormatted(pizza);
//# sourceMappingURL=class-abstract.js.map