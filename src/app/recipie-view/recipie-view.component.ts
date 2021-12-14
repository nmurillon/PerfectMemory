import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../_services/recipe.service';
import { processRecipe } from '../_utils/utils';

@Component({
  selector: 'app-recipie-view',
  templateUrl: './recipie-view.component.html',
  styleUrls: ['./recipie-view.component.css']
})
export class RecipieViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  recipe = undefined;
  success = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(id).subscribe(
      data => {
        this.recipe = data.meals[0];
        processRecipe(this.recipe);
        this.success = true;
      },
      err => {
        console.error(err);
      }
    );

  }

}
