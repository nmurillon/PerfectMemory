export const processRecipe = (recipe: JSON) => {
    let i = 1;
    let ingredientCount = 0;
    let ingredients = [];
    while (i < 20 && recipe["strIngredient" + i] !== "") {
        ingredients.push({
            'name': recipe["strIngredient" + i],
            'measure': recipe["strMeasure" + i]
        });
        i++;
    }

    recipe["ingredientCount"] = ingredientCount;
    recipe['ingredients'] = ingredients;
}