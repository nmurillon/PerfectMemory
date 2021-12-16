import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { RecipeService } from '../_services/recipe.service';
import { StorageService } from '../_services/storage.service';
import { processRecipe } from '../_utils/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private storageService: StorageService) { }
  
  faStar = faStar;
  farStar = farStar;
  faCheckCircle = faCheckCircle;
  farCheckCircle = farCheckCircle;
  meals = [];

  /* TODO : Split search in two parts : category filter and search by name */
  recipeForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(false),
  });

  ngOnInit(): void {
    /* As the API requires a key (for patreons) to get multiple meals, we will call the api 10 times to get one meal each time*/
    for(let i=0; i<10; i++) {
      this.recipeService.getRandomRecipe().subscribe(
        data => {
          let meal = data.meals[0];
          processRecipe(meal)
          this.meals.push(meal);
        },
        err => {
          console.error(err)
        }
      );
    }
    console.log(this.meals);
  }

  onSearch() {

    const formValues = this.recipeForm.value;
    console.log(formValues)
    /* First we'll consider that category only filters the meals already displayed on screen */
    if (formValues.name !== "") {
      this.recipeService.getRecipeByName(formValues.name).subscribe(
        data => {
          console.log(data);
          this.meals = [];
          for (let i=0; i<Math.min(10, data.meals.length); i++){
            let meal = data.meals[i];
            processRecipe(meal);
            this.meals.push(meal);
          }
        }
      );
    }

    if (formValues.category === true) {
      this.meals = this.meals.sort((m1,m2) => {
        if (m1.strCategory < m2.strCategory){
          return -1;
        }
        else {
          return 1;
        }
      });
    }
  }

  toggleFavorite(recipe: any) {
    if (recipe.favorite === true) {
      this.storageService.removeFavorite(recipe);
      recipe.favorite = !recipe.favorite
    }
    else {
      recipe.favorite = !recipe.favorite
      this.storageService.addFavorite(recipe);
    }
  }

  toggleToTest(recipe: any) {
    if (recipe.toTest === true) {
      this.storageService.removeToTest(recipe);
      recipe.toTest = !recipe.toTest
    }
    else {
      recipe.toTest = !recipe.toTest
      this.storageService.addToTest(recipe);
    }
  }
}
