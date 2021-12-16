import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { ToTestComponent } from './to-test/to-test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeViewComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'toTest', component: ToTestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
