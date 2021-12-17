import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { ToTestComponent } from './to-test/to-test.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ListButtonsComponent } from './list-buttons/list-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeViewComponent,
    FavoritesComponent,
    ToTestComponent,
    RecipeCardComponent,
    ListButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
