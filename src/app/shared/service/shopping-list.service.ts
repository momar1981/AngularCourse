import {Ingredient} from '../ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  private  ingredients: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Tomatoes',10)];

  public IngredientsChangedSubject = new Subject<Ingredient[]>();
  public _SelectedIngredientSubject = new Subject<Ingredient>();
  private selectedIngredient : Ingredient;
  constructor() { }

  public getIngredients()
  {
    return this.ingredients.slice();
  }

  public AddIngredient(newIngredient : Ingredient)
  {
    this.ingredients.push(newIngredient);
    this.IngredientsChangedSubject.next(this.ingredients);

  }

  public AddIngredients(newIngredients : Ingredient[])
  {
    // newIngredients.forEach(x => {
    //   this.ingredients.push(x);
    // });
    this.ingredients.push(...newIngredients);
    this.IngredientsChangedSubject.next(this.ingredients);
  }

  public OnIngredientSelected(selectedIngredient : Ingredient)
  {
    this.selectedIngredient = selectedIngredient;
    this._SelectedIngredientSubject.next(selectedIngredient);
  }

  public EditIngredient(newIngredient : Ingredient)
  {
    if(this.selectedIngredient)
    {
      let foundingredientIndex =  this.ingredients.findIndex(x=> x== this.selectedIngredient);
      if (foundingredientIndex > -1) 
      {
        this.ingredients[foundingredientIndex] = newIngredient;
        this.IngredientsChangedSubject.next(this.ingredients);
        this.selectedIngredient = newIngredient;
      }
    }
  }

  public DeleteIngredient()
  {
    if(this.selectedIngredient)
    {
      let index = this.ingredients.findIndex(obj => obj == this.selectedIngredient);
      if (index > -1) 
        this.ingredients.splice(index, 1);
      this.IngredientsChangedSubject.next(this.ingredients);
      this.selectedIngredient = null;
    }
  }
 
}
