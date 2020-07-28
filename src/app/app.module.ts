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
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule
    
    ,AppRoutingModule
    ,RecipesModule
    ,SharedModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 