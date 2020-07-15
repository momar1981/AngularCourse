import { Recipe } from '../../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from 'src/app/shared/service/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
  
export class RecipeService 
{
 public recipesChnagedSubject = new Subject<Recipe[]>();  
 private recipes: Recipe[] = [
                                new Recipe(1,'A Test Recipe 1','This is simply Description 1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0_yeHO_Wv7q65HAMOHYwshnD4r47E6zdaJa2Hn2h0lUaseD_B&usqp=CAU',
                                [new Ingredient('Meat',10),new Ingredient('French Fries',20)]),
                                new Recipe(2,'A Test Recipe 2','This is simply Description 2','https://previews.123rf.com/images/vmalafeevskiy/vmalafeevskiy1706/vmalafeevskiy170600007/80167889-fast-food-drawings-white-background.jpg',
                                [new Ingredient('Buns',30),new Ingredient('Meat',40)])];
  
  constructor(private shoppingListSRV : ShoppingListService) { }
  
  // public _SelectedRecipeItemEvent = new EventEmitter<any>();

  public getRecipe(id: Number)
  {
    return this.getRecipesList().find(x=> x.id == id);
  }
  
  public getRecipesList()
  {
    return this.recipes.slice();
  }

  public addNewRecipe(newRecipe : Recipe)
  {
    newRecipe.id = this.recipes.length + 1;
    this.recipes.push(newRecipe);
    this.recipesChnagedSubject.next(this.getRecipesList());
  }

  public updateRecipe(id: number, updateRecipe : Recipe)
  {
    updateRecipe.id = id;
    this.recipes[this.recipes.findIndex(x=> x.id == id)] = updateRecipe;
    this.recipesChnagedSubject.next(this.getRecipesList());
  }

  public deleteRecipe(deleteRecipe : Recipe)
  {
    debugger;
    this.recipes.splice(this.recipes.findIndex(x=> x.id == deleteRecipe.id),1);
    this.recipesChnagedSubject.next(this.getRecipesList());
  }

  public addIngredientsToShoppingList(ingredients : Ingredient [])
  {
    this.shoppingListSRV.AddIngredients(ingredients);
  }

  
}
