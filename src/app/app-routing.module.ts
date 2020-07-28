
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';


import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';

const appRoutes : Routes = 
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
},
{path:'shopping-list', component:ShoppingListComponent, canActivate:[AuthService]},
{path:'signup', component:SignupComponent},
{path:'signin', component:SigninComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
