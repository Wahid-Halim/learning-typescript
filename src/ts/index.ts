import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;

const createPizzaTemplate = (pizza: PizzaProps): string => {
  return `
    <div class="pizza">
    <h2 >${pizza.title}</h2>
    <p class="toppings">${pizza.toppings.join(", ")}</p>
    <p>${pizza.description}</p>
    <span >$${pizza.price}</span>
    </div>
    `;
};

const renderTemplates = (templates: string[], parent: Element): void => {
  const templateElements = document.createElement("template");

  for (const t of templates) {
    templateElements.innerHTML += t;
  }

  parent.append(templateElements.content);
};

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  const pizzaTemplates = pizzas.map(createPizzaTemplate);
  renderTemplates(pizzaTemplates, rootElement);
});
