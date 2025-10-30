// classes

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  title: string;
  price: number;
  toppings: string[] = [];
  base: Base = "classic";

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base) {
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
