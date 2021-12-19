# Perfect Recipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.
To install all the dependencies, run `npm install`

# Subject

The goal of this project was to take part in a coding interview with the following subject (using [the meal DB API](https://www.themealdb.com)):

**A user can search for cooking recipes on the website and mark them as 'favorite' or 'To test/To do'**

- 10 recipes are displayed by default. Each result must display : the thumbnail, the category and the number of ingredients
- From this list, the user can access the details of the recipe
- The user can search for recipes by name (first 10 corresponding results) and filter them by category
- Each recipe can be marked as 'favorite' and 'to test' and the user can access these lists. Moreover, the recipe marked are saved with the `localStorage` API

# Work done

First of all, I decided to create a service for the recipes (CRUD). Then I created a component for the home page.

On the home page, 10 random recipes are displayed. However, themealdb API only allows retrieving random recipes one by one (except for the patreons). So I decided to make 10 calls to the API and display the data when they are ready.

Then, I created the `recipe-view` component to display the details of a recipe :
- Name
- Image
- Ingredients
- Instructions

At this time, the goal was not to make something look good, but rather to hav a working component.

After that, I decided to add a function named `processRecipe` taking a recipe as a parameter. This function adds some information to the recipe. For example, a recipe retrieved from the database has at most 20 ingredients, but they are not in an array. We have something like this :

```json
{
    "meals":[
        {
            "idMeal":"52866",
            "strMeal":"Squash linguine",
            "strDrinkAlternate":null,
            "strCategory":"Vegetarian",
            "strArea":"Italian",
            "strInstructions":"Heat oven to 200C\/180C fan\/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season.\r\nCook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wxswxy1511452625.jpg",
            "strTags":"Pasta,Light",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=xHZ-PoGwTLQ",
            "strIngredient1":"Butternut Squash",
            "strIngredient2":"Garlic",
            "strIngredient3":"Olive Oil",
            "strIngredient4":"Linguine Pasta",
            "strIngredient5":"Sage",
            "strIngredient6":"",
            "strIngredient7":"",
            "strIngredient8":"",
            "strIngredient9":"",
            "strIngredient10":"",
            "strIngredient11":"",
            "strIngredient12":"",
            "strIngredient13":"",
            "strIngredient14":"",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"350g",
            "strMeasure2":"3 parts ",
            "strMeasure3":"3 tbs",
            "strMeasure4":"350g",
            "strMeasure5":"Small bunch",
            "strMeasure6":"",
            "strMeasure7":"",
            "strMeasure8":"",
            "strMeasure9":"",
            "strMeasure10":"",
            "strMeasure11":"",
            "strMeasure12":"",
            "strMeasure13":"",
            "strMeasure14":"",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/creamy-squash-linguine",
            "strImageSource":null,
            "strCreativeCommonsConfirmed":null,
            "dateModified":null
        }
    ]
}
```

The idea is to add an attribute `ingredientCount` to avoid parsing the `strIngredient` each time. I also added an attribute `ingredients` to concatenate each ingredient with its corresponding measure.

After that, I started working on the search bar on the home page. This search bar allows the user to search for a recipe by its name (there is also a filter on the category). The first 10 results are then displayed. At the moment, you need to click on the search button to search, but it is possible to add an `onChange` event handler to automatically search for the recipe after the user end typing (not implemented yet).

Afterwards, I created a service (`storageService`) to use the `localStorage` API (saving favorite and to do recipes), then I added some icons (using FontAwesome module for angular) to allow a user to set or unset a recipe as favorite/to do.

At this point, everything was working fine, so I decided to start improving the app. The first improvement was to make cards on the home page to display the recipes (I used the following template for the cards : [Social-Mobile-App](https://dribbble.com/shots/10951466-Social-Mobile-App)).

The next step was to rework the way the details of a recipe were displayed. This time I used [another template](https://codepen.io/michmy/pen/GrzwVL).

Afterwards, I reworked the way `storageService` removes the data from the favorite and the to do lists.

Finally, I reworked the search bar to make it look better.

Many things still need to be done, such as :
- making an entity for the recipes (instead of using json)
- Add a message if an error occurs while retrieving the data from themealdb API
- Rework the way icons add/remove recipes from favorite/to do lists 

## Sources

Logo : https://www.cleanpng.com/png-recipe-food-restaurant-cuisine-cook-4027422/download-png.html

Card Style : https://dribbble.com/shots/10951466-Social-Mobile-App

Recipe Details style : https://codepen.io/michmy/pen/GrzwVL

Clip-Path: https://bennettfeely.com/clippy/