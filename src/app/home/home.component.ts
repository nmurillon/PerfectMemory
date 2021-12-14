import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  
  meals = [];
  
  ngOnInit(): void {
    /* As the API requires a key (for patreons) to get multiple meals, we will call the api 10 times to get one meal each time*/
    for(let i=0; i<10; i++) {
      this.recipeService.getRandomRecipe().subscribe(
        data => {
          let meal = data.meals[0];
          let ingredientCount = 0;
          let j=1;
          let ingredient = "strIngredient" + j;
          while(j<=20 && meal[ingredient] != ""){
              ingredientCount++;
              j++;
              ingredient = "strIngredient" + j;
          }

          meal["ingredientCount"] = ingredientCount;
          this.meals.push(meal);
        },
        err => {
          console.error(err)
        }
      );
    }
    console.log(this.meals);
  }

}
