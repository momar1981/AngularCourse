import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
import {Subscription} from'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients : Ingredient []= [];
  addNewingredientsSubscription : Subscription

  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void 
  {
    this.ingredients = this.shoppingListSRV.getIngredients();
    this.addNewingredientsSubscription = this.shoppingListSRV.IngredientsChangedSubject.subscribe((ingredientsList :Ingredient[]) =>{
      this.ingredients = ingredientsList;
    })
  }
  
  onIngredientClicked(selecedIngredient : Ingredient)
  {
    this.shoppingListSRV.OnIngredientSelected(selecedIngredient);
  }

  ngOnDestroy()
  {
    this.addNewingredientsSubscription.unsubscribe();
  }
}
