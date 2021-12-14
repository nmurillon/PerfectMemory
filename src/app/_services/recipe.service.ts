import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = "https://www.themealdb.com/api/json/v1/1/"

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) { }

  getRandomRecipe(): Observable<any> {
    return this.http.get(API + "random.php");
  }

  getRandomRecipes(): Observable<any> {
    return this.http.get(API + "randomselection.php");
  }

  getRecipeById(id: string): Observable<any> {
    return this.http.get(API + "lookup.php?i=" + id);
  }
  
}
