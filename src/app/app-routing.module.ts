import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes : Routes = 
[

  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component:RecipesComponent,
    children :
    [
      {path:'', component: RecipeStartComponent},
      {path:'new', component: EditRecipeComponent},
      {path:':id/edit', component: EditRecipeComponent},
      {path:':id', component: RecipeDetailComponent}
    ]
  },
  {path:'shopping-list', component:ShoppingListComponent}

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
