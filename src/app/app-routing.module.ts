import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes : Routes = 
[

  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component:RecipesComponent,data:{InitialMessage : 'Please Select a Recipe.......!!!!!' }  ,
    children :
    [{path:':id', component: RecipeDetailComponent}]
  },
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
