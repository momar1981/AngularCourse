import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';
import { ActivatedRoute ,Params} from '@angular/Router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipeItem : Recipe;
  constructor(private recipeSRV : RecipeService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.aRoute.params.subscribe(
      (paramsArray: Params) =>{
        this.recipeItem =this.recipeSRV.getRecipe(+paramsArray["id"]);
      }
    )
  }

  onToShoppingListClicked(){
    this.recipeSRV.addIngredientsToShoppingList(this.recipeItem.ingredientsList);
  }

}
