import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favoriteSubject = new Subject<any[]>();
  private favorites = [];

  toTestSubject = new Subject<any[]>();
  private toTest = [];

  constructor() {
    let favorites = localStorage.getItem("favorites");
    let toTest = localStorage.getItem("toTest");

    if (favorites === null) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    else {
      this.favorites = JSON.parse(favorites); 
    }

    if (toTest === null) {
      localStorage.setItem("toTest", JSON.stringify([]));
    }
    else {
      this.toTest = JSON.parse(toTest); 
    }
  }

  isFavorite(recipe: any) {
    return this.favorites.find((item: any) => {
      return item.idMeal === recipe.idMeal;
    }) !== undefined;
  }

  isToTest(recipe: any) {
    return this.toTest.find((item: any) => {
      return item.idMeal === recipe.idMeal;
    }) !== undefined;
  }

  saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  emitFavorites() {
    this.favoriteSubject.next(this.favorites.slice());
  }

  getFavorites() {
    return this.emitFavorites();
  }

  addFavorite(recipe: any) {
    this.favorites.push(recipe);
    this.saveFavorites();
    this.emitFavorites();
  }

  removeFavorite(recipe: any) {
    let r = this.favorites.find( (_recipe: any) => {
      return _recipe.idMeal === recipe.idMeal;
    });
       
    if(r !== undefined){
      this.favorites.splice(this.favorites.indexOf(r),1);
      this.saveFavorites();
    }
    this.emitFavorites();
  }

  saveToTest() {
    localStorage.setItem("toTest", JSON.stringify(this.toTest));
  }

  emitToTest() {
    this.toTestSubject.next(this.toTest.slice());
  }

  getToTest() {
    return this.emitToTest();
  }

  addToTest(recipe: any) {
    this.toTest.push(recipe);
    this.saveToTest();
    this.emitToTest();
  }

  removeToTest(recipe: any) {
    let r = this.toTest.find( (_recipe): any => {
      return _recipe.idMeal === recipe.idMeal;
    });
       
    if(r !== undefined){
      this.toTest.splice(this.toTest.indexOf(r),1);
      this.saveToTest();
    }
    this.emitToTest();
  }

  toggleFavorite(recipe: any) {
    if (recipe.favorite === true) {
      this.removeFavorite(recipe);
      recipe.favorite = !recipe.favorite
    }
    else {
      recipe.favorite = !recipe.favorite
      this.addFavorite(recipe);
    }
  }

  toggleToTest(recipe: any) {
    if (recipe.toTest === true) {
      this.removeToTest(recipe);
      recipe.toTest = !recipe.toTest
    }
    else {
      recipe.toTest = !recipe.toTest
      this.addToTest(recipe);
    }
  }
}
