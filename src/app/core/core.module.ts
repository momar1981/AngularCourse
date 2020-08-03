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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { AlertMessageService } from '../shared/alert-message.service';
import { AlertMessageComponent } from '../shared/alert-message/alert-message.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AlertMessageComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent,
    AlertMessageComponent
  ], 
  providers:[ShoppingListService,RecipeService,DataStorageService,AuthService,AlertMessageService,
  {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true}],
})
export class CoreModule { }
