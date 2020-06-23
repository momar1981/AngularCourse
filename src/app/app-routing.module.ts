import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes : Routes = 
[

  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component:RecipesComponent},
  {path:'shopping-list', component:ShoppingListComponent},

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
