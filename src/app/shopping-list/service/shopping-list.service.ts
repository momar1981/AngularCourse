import {Ingredient} from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  public  _Ingredients: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Tomatoes',10)];
  public _SelectedIngredient : Ingredient ;
  constructor() { }

  public AddIngredient(newIngredient : Ingredient)
  {
    this._Ingredients.push(newIngredient);
  }

  public DeleteIngredient()
  {
    if(this._SelectedIngredient)
    {
      let index = this._Ingredients.findIndex(obj => obj == this._SelectedIngredient);
      if (index > -1) 
        this._Ingredients.splice(index, 1);
    }
  }

  public ClearIngredients()
  {
    this._Ingredients.splice(0,this._Ingredients.length);
  }
}
