import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipieViewComponent } from './recipie-view/recipie-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipieViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
