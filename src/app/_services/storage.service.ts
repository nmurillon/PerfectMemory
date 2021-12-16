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
    let idx = this.favorites.indexOf(recipe);
    
    if(idx !== -1){
      this.favorites.splice(idx,1);
      this.saveFavorites();
    }

  }

  saveToTest() {
    localStorage.setItem("toTest", JSON.stringify(this.favorites));
  }

  emitToTest() {
    this.toTestSubject.next(this.toTest.slice());
  }

  getToTest() {
    return this.emitToTest();
  }

  addToTest(recipe: any) {
    this.toTest.push(recipe);
    this.saveFavorites();
    this.emitFavorites();
  }

  removeToTest(recipe: any) {
    let idx = this.toTest.indexOf(recipe);
    
    if(idx !== -1){
      this.toTest.splice(idx,1);
      this.saveToTest();
    }
  }
}
