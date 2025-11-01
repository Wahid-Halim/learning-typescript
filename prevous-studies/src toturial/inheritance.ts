// classes

type Base = "classic" | "thick" | "thin" | "garlic";
class MenuItem {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }
}

class Pizza extends MenuItem {
  private toppings: string[] = [];
  private base: Base = "classic";

  constructor(title: string, price: number) {
    super(title, price);
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

const pizza = new Pizza("mario special", 20);
// console.log(pizza.details); we can access it like a property because of (get)

const printMenuItem = (item: MenuItem): void => {
  console.log(item.details);
};

printMenuItem(pizza);
