import { Component, OnInit } from '@angular/core';
import { RecipeService } from './service/recipe.service';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeItem : Recipe;
  constructor(private recipeSRV :RecipeService) { }

  ngOnInit(): void {
    this.recipeSRV._SelectedRecipeItemEvent.subscribe(x=> this.recipeItem = x);
  }

}
