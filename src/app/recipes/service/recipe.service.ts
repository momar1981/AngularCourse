import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService 
{
 private recipes: Recipe[] = [new Recipe('A Test Recipe 1','This is simply Description 1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0_yeHO_Wv7q65HAMOHYwshnD4r47E6zdaJa2Hn2h0lUaseD_B&usqp=CAU'),
                       new Recipe('A Test Recipe 2','This is simply Description 2','https://previews.123rf.com/images/vmalafeevskiy/vmalafeevskiy1706/vmalafeevskiy170600007/80167889-fast-food-drawings-white-background.jpg')];
  
  constructor() { }
  
  _SelectedRecipeItemEvent = new EventEmitter<Recipe>(); 

  public getRecipesList()
  {
    return this.recipes.slice();
  }
}
