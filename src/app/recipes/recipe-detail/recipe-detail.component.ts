import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input('InRecipeItem') recipeItem : Recipe;
  constructor(private recipeSRV : RecipeService) { }

  ngOnInit(): void {
   
  }

  onToShoppingListClicked(){
    this.recipeSRV.addIngredientsToShoppingList(this.recipeItem.ingredientsList);
  }

}
