import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';

import {DataStorageService} from './shared/service/data-storage.service';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { RecipeService } from './shared/service/recipe.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule
    , HttpModule
    ,FormsModule
     
    ,AppRoutingModule
    ,RecipesModule
    ,ShoppingListModule
    ,SharedModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 