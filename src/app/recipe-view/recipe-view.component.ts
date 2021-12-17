import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../_services/recipe.service';
import { processRecipe } from '../_utils/utils';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})

export class RecipeViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private storageService: StorageService) { }

  recipe = undefined;
  success = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(id).subscribe(
      data => {
        this.recipe = data.meals[0];
        processRecipe(this.recipe);
        this.recipe["favorite"] = this.storageService.isFavorite(this.recipe);
        this.recipe["toTest"] = this.storageService.isToTest(this.recipe);
        this.success = true;
      },
      err => {
        console.error(err);
      }
    );
  }

}
