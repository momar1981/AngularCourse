import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

import { RecipesRoutingModule } from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,RecipesRoutingModule ,ReactiveFormsModule
    ,SharedModule
  ],
})
export class RecipesModule { }
 