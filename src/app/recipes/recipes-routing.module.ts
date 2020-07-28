
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';


import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from '../recipes/edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { AuthService } from '../auth/auth.service';


const recipesRoutes : Routes = 
[

{path:'', redirectTo:'/recipes', pathMatch:'full'},
{path:'recipes', component:RecipesComponent,
children :
[
  {path:'', component: RecipeStartComponent},
  {path:'new', component: EditRecipeComponent, canActivate:[AuthService]},
  {path:':id/edit', component: EditRecipeComponent, canActivate:[AuthService]},
  {path:':id', component: RecipeDetailComponent}
]
}];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports:[RouterModule]
})
export class RecipesRoutingModule { }
 