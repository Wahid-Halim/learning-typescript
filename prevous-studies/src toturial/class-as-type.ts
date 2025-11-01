// classes

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  private toppings: string[] = [];
  private base: Base = "classic";

  constructor(private title: string, private price: number) {}

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

const pizzaOne = new Pizza("italian pizza", 100);
const pizzaTwo = new Pizza("italian pizza", 100);

const addMushroomsToPizzas = (pizzas: Pizza[]): void => {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
};

addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
