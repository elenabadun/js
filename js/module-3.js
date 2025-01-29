// Array
// Object
// function
const planets = ["uranus", "saturn", "earth", "jupiter", "neptun"];
// console.log(planets.length);
// planets.length = 2;
// console.log(planets);
const newPlanets = [];
// for (let i = 0; i < planets.length; i++) {
//   const planet = planets[i];
//   if (planet.includes("p")) {
//     newPlanets.push(planet);
//   }
// }
// console.log(newPlanets);
for (const planet of planets) {
  if (planet.includes("p")) {
    newPlanets.push(planet);
  }
}
// console.log(newPlanets);
// console.dir(planets);

// const arrowFn = () => {};

async function getRecipes() {
  const resp = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/recipes"
  );
  const { results } = await resp.json();

  return results;
}
// getRecipes();
/**
 * Знайти і повернути масив страв з вказаним інгрідієнтом 640c2dd963a319ea671e367e */
const ingridientId = "640c2dd963a319ea671e367e";
function findRecipesWithIngridient(recipesList = [], ingridientId = "") {
  const filteredRecipes = recipesList.filter((item, index, array) => {
    //   console.log(item.ingredients);
    const result = item.ingredients.filter((ingredient, index, array) => {
      //   console.log(ingredient.id);
      return ingredient.id === ingridientId;
    });
    // console.log(result);
    return result.length > 0;
  });
  console.log(filteredRecipes);
}
async function showInfo() {
  const recipes = await getRecipes();
  findRecipesWithIngridient(recipes, ingridientId);
}
showInfo();
function multiply(x, y) {
  // x = 2
  // y = 3
  // arguments = []
  // this = ?
  return x * y;
  // return undefined
}
multiply(2, 3);
