const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients")

const liIngr = ingredients.map(ingredient => {
  const newEl = document.createElement("li")
  newEl.classList.add("item")
  newEl.textContent = `${ingredient}`
  return newEl
})

ulIngredients.append(...liIngr)