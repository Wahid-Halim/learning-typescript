// classes

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  private title: string;
  private price: number;

  private toppings: string[] = [];
  private base: Base = "classic";

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
  //   constructor(private title: string, private price: number) {} is the same as the top example the variable are accessible inside class

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

// newPizza.title  is not accessible because it's private
console.log(newPizza);
