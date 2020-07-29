
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {DataStorageService} from './shared/service/data-storage.service';
import { ShoppingListService } from './shared/service/shopping-list.service';
import { RecipeService } from './shared/service/recipe.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import {SharedModule} from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , HttpModule
     
    ,CoreModule
    ,AppRoutingModule
    ,ShoppingListModule
    ,AuthModule
    ,SharedModule
  ],
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 