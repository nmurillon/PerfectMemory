import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipie-view',
  templateUrl: './recipie-view.component.html',
  styleUrls: ['./recipie-view.component.css']
})
export class RecipieViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  recipe = undefined;
  ingredients = [];
  success = false;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(id).subscribe(
      data => {
        this.recipe = data.meals[0];
        
        let i = 1;

        while( i<20 && this.recipe["strIngredient" + i] !== "" ){
          this.ingredients.push({
            'name': this.recipe["strIngredient" + i],
            'measure': this.recipe["strMeasure" + i]
          });
          i++;
        }

        this.success = true;
      },
      err => {
        console.error(err);
      }
    );
    
  }

}
