import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import {DataStorageService} from './shared/service/data-storage.service';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { RecipeService } from './shared/service/recipe.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    EditRecipeComponent,
    RecipeStartComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule, HttpModule ,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
