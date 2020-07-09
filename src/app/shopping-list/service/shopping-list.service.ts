import {Ingredient} from '../../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  private  ingredients: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Tomatoes',10)];

  public _IngredientsSubject = new Subject<Ingredient[]>();

  constructor() { }

  public getIngredients()
  {
    return this.ingredients.slice();
  }

  public AddIngredient(newIngredient : Ingredient)
  {
    this.ingredients.push(newIngredient);
    this._IngredientsSubject.next(this.ingredients);

  }

  public AddIngredients(newIngredients : Ingredient[])
  {
    // newIngredients.forEach(x => {
    //   this.ingredients.push(x);
    // });
    this.ingredients.push(...newIngredients);
    this._IngredientsSubject.next(this.ingredients);
  }



}
