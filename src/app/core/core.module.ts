import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shared/service/shopping-list.service';
import { RecipeService } from '../shared/service/recipe.service';
import { DataStorageService } from '../shared/service/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ], 
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService],
})
export class CoreModule { }