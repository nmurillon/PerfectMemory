import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:4200' })
};

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient) { }

  getRandomRecipe(): Observable<any> {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/random.php");
  }

  getRandomRecipes(): Observable<any> {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/randomselection.php");
  }
  
}
