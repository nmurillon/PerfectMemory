(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/PerfectRecipe/PerfectRecipe/src/main.ts */"zUnb");


/***/ }),

/***/ "3s+D":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/storage.service */ "47AC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe-card/recipe-card.component */ "eoH7");




function FavoritesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipe_r1);
} }
class FavoritesComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.favorites = [];
    }
    ngOnInit() {
        this.favoritesSubscription = this.storageService.favoriteSubject.subscribe((favorites) => {
            this.favorites = favorites;
        });
        this.storageService.emitFavorites();
    }
    ngOnDestroy() {
        this.favoritesSubscription.unsubscribe();
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "text-center"], [1, "cards"], [4, "ngFor", "ngForOf"], [3, "recipe"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My favorite recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoritesComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favorites);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__["RecipeCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "47AC":
/*!**********************************************!*\
  !*** ./src/app/_services/storage.service.ts ***!
  \**********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() {
        this.favoriteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.favorites = [];
        this.toTestSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.toTest = [];
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
    isFavorite(recipe) {
        return this.favorites.find((item) => {
            return item.idMeal === recipe.idMeal;
        }) !== undefined;
    }
    isToTest(recipe) {
        return this.toTest.find((item) => {
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
    addFavorite(recipe) {
        this.favorites.push(recipe);
        this.saveFavorites();
        this.emitFavorites();
    }
    removeFavorite(recipe) {
        let r = this.favorites.find((_recipe) => {
            return _recipe.idMeal === recipe.idMeal;
        });
        if (r !== undefined) {
            this.favorites.splice(this.favorites.indexOf(r), 1);
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
    addToTest(recipe) {
        this.toTest.push(recipe);
        this.saveToTest();
        this.emitToTest();
    }
    removeToTest(recipe) {
        let r = this.toTest.find((_recipe) => {
            return _recipe.idMeal === recipe.idMeal;
        });
        if (r !== undefined) {
            this.toTest.splice(this.toTest.indexOf(r), 1);
            this.saveToTest();
        }
        this.emitToTest();
    }
    toggleFavorite(recipe) {
        if (recipe.favorite === true) {
            this.removeFavorite(recipe);
            recipe.favorite = !recipe.favorite;
        }
        else {
            recipe.favorite = !recipe.favorite;
            this.addFavorite(recipe);
        }
    }
    toggleToTest(recipe) {
        if (recipe.toTest === true) {
            this.removeToTest(recipe);
            recipe.toTest = !recipe.toTest;
        }
        else {
            recipe.toTest = !recipe.toTest;
            this.addToTest(recipe);
        }
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_utils/utils */ "i52m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/recipe.service */ "BWc6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe-card/recipe-card.component */ "eoH7");







function HomeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-recipe-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("recipe", meal_r1);
} }
class HomeComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
        this.meals = [];
        /* TODO : Split search in two parts : category filter and search by name */
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
        });
    }
    ngOnInit() {
        /* As the API requires a key (for patreons) to get multiple meals, we will call the api 10 times to get one meal each time*/
        for (let i = 0; i < 10; i++) {
            this.recipeService.getRandomRecipe().subscribe(data => {
                let meal = data.meals[0];
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["processRecipe"])(meal);
                this.meals.push(meal);
            }, err => {
                console.error(err);
            });
        }
        console.log(this.meals);
    }
    onSearch() {
        const formValues = this.recipeForm.value;
        console.log(formValues);
        /* First we'll consider that category only filters the meals already displayed on screen */
        if (formValues.name !== "") {
            this.recipeService.getRecipeByName(formValues.name).subscribe(data => {
                console.log(data);
                this.meals = [];
                for (let i = 0; i < Math.min(10, data.meals.length); i++) {
                    let meal = data.meals[i];
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["processRecipe"])(meal);
                    this.meals.push(meal);
                }
            });
        }
        if (formValues.category === true) {
            this.meals = this.meals.sort((m1, m2) => {
                if (m1.strCategory < m2.strCategory) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 2, consts: [[1, "container"], [1, "text-center"], [1, "container-fluid", "container", "mt-4"], [3, "formGroup"], [1, "d-flex", "row", "align-items-center", "justify-content-center"], [1, "col-auto"], ["for", "category", 1, "form-check-label"], ["id", "category", "type", "checkbox", "formControlName", "category", 1, "form-check-input"], ["for", "recipe-name", 1, "form-check-label"], ["id", "recipe-name", "type", "text", "formControlName", "name", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "my-4"], [1, "cards"], [4, "ngFor", "ngForOf"], [3, "recipe"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome to Perfect Recipe !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The best place on Earth to find your next meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sort by Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Search by Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "In order to help you choose, here are 10 random recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.recipeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.meals);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_5__["RecipeCardComponent"]], styles: [".mw-45[_ngcontent-%COMP%] {\n    max-width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm13LTQ1IHtcbiAgICBtYXgtd2lkdGg6IDQ1JTtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BWc6":
/*!*********************************************!*\
  !*** ./src/app/_services/recipe.service.ts ***!
  \*********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


const API = "https://www.themealdb.com/api/json/v1/1/";
class RecipeService {
    constructor(http) {
        this.http = http;
    }
    getRandomRecipe() {
        return this.http.get(API + "random.php");
    }
    getRandomRecipes() {
        return this.http.get(API + "randomselection.php");
    }
    getRecipeById(id) {
        return this.http.get(API + "lookup.php?i=" + id);
    }
    getRecipeByName(name) {
        return this.http.get(API + "search.php?s=" + name);
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var src_app_animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_animations/animations */ "sEuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class AppComponent {
    constructor() {
        this.title = 'perfect-recipe';
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"];
    }
    prepareRoute(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 37, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "home", 1, "navbar-brand"], ["src", "assets/img/logo.png"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarContent", "aria-controls", "navbarContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLink", "home", 1, "nav-link"], ["routerLink", "favorites", 1, "nav-link"], ["routerLink", "toTest", 1, "nav-link"], [1, "main-container"], ["outlet", "outlet"], [1, "bg-dark", "text-center", "text-white"], [1, "container", "p-4"], [1, "row"], [1, "col-md-6"], ["href", "https://github.com/nmurillon", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [3, "icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Perfect Recipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Recipies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Recipes to test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "main", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "router-outlet", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "About the project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "This project was developped during a one week coding interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Follow me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeAnimation", ctx.prepareRoute(_r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 40px;\n}\n\nfooter[_ngcontent-%COMP%] {\n    margin-top: auto;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xufVxuXG5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"], data: { animation: [src_app_animations_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });


/***/ }),

/***/ "XXwh":
/*!******************************************************!*\
  !*** ./src/app/recipe-view/recipe-view.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeViewComponent", function() { return RecipeViewComponent; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/utils */ "i52m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/recipe.service */ "BWc6");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/storage.service */ "47AC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../list-buttons/list-buttons.component */ "uxcV");







function RecipeViewComponent_div_0_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ingredient_r2.measure, " - ", ingredient_r2.name, "");
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function RecipeViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-list-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RecipeViewComponent_div_0_li_16_Template, 2, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r0.recipe.strMealThumb + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.recipe.strMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.recipe.strCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("recipe", ctx_r0.recipe);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.recipe.ingredients);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.recipe.strInstructions);
} }
class RecipeViewComponent {
    constructor(route, recipeService, storageService) {
        this.route = route;
        this.recipeService = recipeService;
        this.storageService = storageService;
        this.recipe = undefined;
        this.success = false;
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.recipeService.getRecipeById(id).subscribe(data => {
            this.recipe = data.meals[0];
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["processRecipe"])(this.recipe);
            this.recipe["favorite"] = this.storageService.isFavorite(this.recipe);
            this.recipe["toTest"] = this.storageService.isToTest(this.recipe);
            this.success = true;
        }, err => {
            console.error(err);
        });
    }
}
RecipeViewComponent.ɵfac = function RecipeViewComponent_Factory(t) { return new (t || RecipeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
RecipeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeViewComponent, selectors: [["app-recipe-view"]], decls: 1, vars: 1, consts: [["class", "container my-4", 4, "ngIf"], [1, "container", "my-4"], [1, "recipe-img", 3, "ngStyle"], [1, "recipe-card__body"], [1, "d-flex", "justify-content-between"], [1, "recipe-card__heading"], [1, "recipe-card__subhead"], [3, "recipe"], [1, "recipe-card__nav"], [1, "recipe-card__ingredients"], [4, "ngFor", "ngForOf"], [1, "recipe-card__nav", "my-4"]], template: function RecipeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecipeViewComponent_div_0_Template, 23, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_6__["ListButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".recipe-img[_ngcontent-%COMP%] {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50%;\n    border-radius: 10%;\n    min-height: 400px;\n} \n\n.recipe-card__body[_ngcontent-%COMP%] {    \n    padding: 20px;\n} \n\n.recipe-card__heading[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 0;\n  color: #444;\n} \n\n.recipe-card__subhead[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 30px;\n} \n\n.recipe-card__ingredients[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-left: 10px;\n  column-count: 1;\n} \n\n.recipe-card__ingredients[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n} \n\n.recipe-card__ingredients[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: '\\2022';\n    color: #eb9376;\n    margin-right: 5px;\n} \n\n.recipe-card__nav[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  padding: 0;\n  border-bottom: 1px solid #eb9376; \n} \n\n.recipe-card__nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 30px\n} \n\n.recipe-card__nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n} \n\n.recipe-card__nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\n    content: '';\n    display: block;\n    width: 0%;\n    padding-top: 10px;\n    margin: 0 auto;\n    border-bottom: 5px solid #eb9376;\n    transition: width 250ms ease-in-out 0s;\n} \n\n.recipe-card__nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n} \n\n.recipe-card__nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover:after, h3.active[_ngcontent-%COMP%]:after {\n    width: 100%; \n} \n\n@media (min-width:599px) {\n  .recipe-card[_ngcontent-%COMP%] {\n    width: 600px\n  }\n  .recipe-card__ingredients[_ngcontent-%COMP%] {\n    column-count: 2\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7RUFDQTtJQUNFO0VBQ0Y7QUFDRiIsImZpbGUiOiJyZWNpcGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1pbWcge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xufSBcblxuLnJlY2lwZS1jYXJkX19ib2R5IHsgICAgXG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5yZWNpcGUtY2FyZF9faGVhZGluZyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDA7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLnJlY2lwZS1jYXJkX19zdWJoZWFkIHtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucmVjaXBlLWNhcmRfX2luZ3JlZGllbnRzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sdW1uLWNvdW50OiAxO1xufVxuXG4ucmVjaXBlLWNhcmRfX2luZ3JlZGllbnRzIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yZWNpcGUtY2FyZF9faW5ncmVkaWVudHMgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFwyMDIyJztcbiAgICBjb2xvcjogI2ViOTM3NjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJlY2lwZS1jYXJkX19uYXYge1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViOTM3NjsgXG59XG5cblxuLnJlY2lwZS1jYXJkX19uYXYgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHhcbn1cblxuLnJlY2lwZS1jYXJkX19uYXYgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ucmVjaXBlLWNhcmRfX25hdiBoMzphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZWI5Mzc2O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4ucmVjaXBlLWNhcmRfX25hdiBoMzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVjaXBlLWNhcmRfX25hdiBoMzpob3ZlcjphZnRlciwgaDMuYWN0aXZlOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTsgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjU5OXB4KSB7XG4gIC5yZWNpcGUtY2FyZCB7XG4gICAgd2lkdGg6IDYwMHB4XG4gIH1cbiAgLnJlY2lwZS1jYXJkX19pbmdyZWRpZW50cyB7XG4gICAgY29sdW1uLWNvdW50OiAyXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-view/recipe-view.component */ "XXwh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _to_test_to_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./to-test/to-test.component */ "kZMa");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe-card/recipe-card.component */ "eoH7");
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-buttons/list-buttons.component */ "uxcV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_6__["RecipeViewComponent"],
        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
        _to_test_to_test_component__WEBPACK_IMPORTED_MODULE_10__["ToTestComponent"],
        _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_11__["RecipeCardComponent"],
        _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_12__["ListButtonsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "eoH7":
/*!******************************************************!*\
  !*** ./src/app/recipe-card/recipe-card.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCardComponent", function() { return RecipeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/storage.service */ "47AC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-buttons/list-buttons.component */ "uxcV");




class RecipeCardComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }
    ngOnInit() {
        this.recipe["favorite"] = this.storageService.isFavorite(this.recipe);
        this.recipe["toTest"] = this.storageService.isToTest(this.recipe);
    }
}
RecipeCardComponent.ɵfac = function RecipeCardComponent_Factory(t) { return new (t || RecipeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
RecipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeCardComponent, selectors: [["app-recipe-card"]], inputs: { recipe: "recipe" }, decls: 15, vars: 7, consts: [[1, "card"], [1, "card-image", 3, "src", "alt"], [1, "card-overlay"], [1, "card-header"], [1, "card-svg", "card-arc"], [1, "card-header-text"], [1, "card-title"], [1, "card-infos"], [1, "d-flex", "justify-content-center", "my-4"], [1, "btn", "btn-outline-dark", 3, "routerLink"], [3, "recipe"]], template: function RecipeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "See more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-list-buttons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", "Picture of" + ctx.recipe.strMeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.strMeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strCategory, " - ", ctx.recipe.ingredientCount, " ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", "/recipe/" + ctx.recipe.idMeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", ctx.recipe);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _list_buttons_list_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ListButtonsComponent"]], styles: [".card[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    height: 100%;  \n    border-radius: 40px;\n    overflow: hidden;\n    text-decoration: none;\n}\n\n.card-image[_ngcontent-%COMP%] {      \n    width: 100%;\n    height: auto;\n}\n\n.card-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;      \n    border-radius: 40px;    \n    background-color: #fff;      \n    transform: translateY(100%);\n    transition: .2s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n    transform: translateY(0);\n}\n\n.card-header[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 2em;\n    padding: 2em;\n    border-radius: 40px 0 0 0;    \n    background-color: #fff;\n    transform: translateY(-100%);\n    transition: .2s ease-in-out;\n}\n\n.card-arc[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    bottom: 100%;\n    right: 0;      \n    z-index: 1;\n}\n\n.card-svg[_ngcontent-%COMP%] {\n    -webkit-clip-path: inset(44% 0 0 0 round 5% 20% 0% 10%);\n            clip-path: inset(44% 0 0 0 round 5% 20% 0% 10%);\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-header[_ngcontent-%COMP%] {\n    transform: translateY(0);\n}\n\n.card-title[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    margin: 0 0 .3em;\n}\n\n.card-infos[_ngcontent-%COMP%] {\n    font-size: .9em;\n    color: #b899a8;\n}\n\n.card-description[_ngcontent-%COMP%] {\n    padding: 0 2em 2em;\n    margin: 0;\n    color: #D7BDCA;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdURBQStDO1lBQS9DLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7ICBcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZC1pbWFnZSB7ICAgICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTsgICAgICBcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAgICAgIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJkLW92ZXJsYXkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMmVtO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCAwOyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZC1hcmMge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIHJpZ2h0OiAwOyAgICAgIFxuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkLXN2ZyB7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg0NCUgMCAwIDAgcm91bmQgNSUgMjAlIDAlIDEwJSk7XG59ICAgICAgIFxuXG4uY2FyZDpob3ZlciAuY2FyZC1oZWFkZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luOiAwIDAgLjNlbTtcbn1cblxuLmNhcmQtaW5mb3Mge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBjb2xvcjogI2I4OTlhODtcbn1cblxuLmNhcmQtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDAgMmVtIDJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICNEN0JEQ0E7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0gICAgIl19 */"] });


/***/ }),

/***/ "i52m":
/*!*********************************!*\
  !*** ./src/app/_utils/utils.ts ***!
  \*********************************/
/*! exports provided: processRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processRecipe", function() { return processRecipe; });
const processRecipe = (recipe) => {
    let i = 1;
    let ingredientCount = 0;
    let ingredients = [];
    while (i < 20 && recipe["strIngredient" + i] !== "") {
        ingredientCount++;
        ingredients.push({
            'name': recipe["strIngredient" + i],
            'measure': recipe["strMeasure" + i]
        });
        i++;
    }
    recipe["ingredientCount"] = ingredientCount;
    recipe['ingredients'] = ingredients;
};


/***/ }),

/***/ "kZMa":
/*!**********************************************!*\
  !*** ./src/app/to-test/to-test.component.ts ***!
  \**********************************************/
/*! exports provided: ToTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToTestComponent", function() { return ToTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/storage.service */ "47AC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe-card/recipe-card.component */ "eoH7");




function ToTestComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipe_r1);
} }
class ToTestComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.toTest = [];
    }
    ngOnInit() {
        this.toTestSubscription = this.storageService.toTestSubject.subscribe((toTest) => {
            this.toTest = toTest;
        });
        this.storageService.emitToTest();
    }
    ngOnDestroy() {
        this.toTestSubscription.unsubscribe();
    }
}
ToTestComponent.ɵfac = function ToTestComponent_Factory(t) { return new (t || ToTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
ToTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToTestComponent, selectors: [["app-to-test"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "text-center"], [1, "cards"], [4, "ngFor", "ngForOf"], [3, "recipe"]], template: function ToTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The recipes I need to try");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToTestComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toTest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_3__["RecipeCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0by10ZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "sEuA":
/*!*******************************************!*\
  !*** ./src/app/_animations/animations.ts ***!
  \*******************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute',
                opacity: 0,
                width: '100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute',
                opacity: 1,
                width: '100%' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute',
                opacity: 0,
                width: '100%' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "uxcV":
/*!********************************************************!*\
  !*** ./src/app/list-buttons/list-buttons.component.ts ***!
  \********************************************************/
/*! exports provided: ListButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListButtonsComponent", function() { return ListButtonsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/storage.service */ "47AC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






const _c0 = function () { return { "color": "red" }; };
function ListButtonsComponent_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faStar)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function ListButtonsComponent_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.farStar)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function ListButtonsComponent_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r2.faCheckCircle);
} }
function ListButtonsComponent_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r3.farCheckCircle);
} }
class ListButtonsComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faStar"];
        this.farStar = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheckCircle"];
        this.farCheckCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"];
    }
    ngOnInit() {
    }
    toggleFavorite() {
        this.storageService.toggleFavorite(this.recipe);
    }
    toggleToTest() {
        this.storageService.toggleToTest(this.recipe);
    }
}
ListButtonsComponent.ɵfac = function ListButtonsComponent_Factory(t) { return new (t || ListButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
ListButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListButtonsComponent, selectors: [["app-list-buttons"]], inputs: { recipe: "recipe" }, decls: 6, vars: 4, consts: [[1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remove from favorites", 3, "icon", "styles", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add to favorites", 3, "icon", "styles", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remove from test list", 3, "icon", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add to test list", 3, "icon", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remove from favorites", 3, "icon", "styles"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add to favorites", 3, "icon", "styles"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Remove from test list", 3, "icon"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add to test list", 3, "icon"]], template: function ListButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListButtonsComponent_Template_button_click_0_listener() { return ctx.toggleFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListButtonsComponent_fa_icon_1_Template, 1, 3, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListButtonsComponent_fa_icon_2_Template, 1, 3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListButtonsComponent_Template_button_click_3_listener() { return ctx.toggleToTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListButtonsComponent_fa_icon_4_Template, 1, 1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListButtonsComponent_fa_icon_5_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.favorite === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.favorite === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.toTest === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe.toTest === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJ1dHRvbnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites/favorites.component */ "3s+D");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-view/recipe-view.component */ "XXwh");
/* harmony import */ var _to_test_to_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-test/to-test.component */ "kZMa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'recipe/:id', component: _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_3__["RecipeViewComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_1__["FavoritesComponent"] },
    { path: 'toTest', component: _to_test_to_test_component__WEBPACK_IMPORTED_MODULE_4__["ToTestComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map