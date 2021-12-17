import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.recipe["favorite"] = this.storageService.isFavorite(this.recipe);
    this.recipe["toTest"] = this.storageService.isToTest(this.recipe);
  }
}
