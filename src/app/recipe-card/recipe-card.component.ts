import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  @Input()
  recipe: any;

  faStar = faStar;
  farStar = farStar;
  faCheckCircle = faCheckCircle;
  farCheckCircle = farCheckCircle;

  ngOnInit(): void {
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
