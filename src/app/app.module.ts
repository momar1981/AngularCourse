
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {DataStorageService} from './shared/service/data-storage.service';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { RecipeService } from './shared/service/recipe.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
    , HttpModule
     
    ,AppRoutingModule
    ,ShoppingListModule
    ,AuthModule
    ,SharedModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 