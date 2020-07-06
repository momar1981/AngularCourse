import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients : Ingredient []= [];
  ingredientSubscription : Subscription;

  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void 
  {
    this.ingredients = this.shoppingListSRV._Ingredients;
    this.ingredientSubscription = this.shoppingListSRV._AddIngredientSubject.subscribe(x=> x = this.ingredients);
  }
  
  onItemClicked(selecedIngredient : Ingredient)
  {
    this.shoppingListSRV._SelectedIngredient =  selecedIngredient;
  }
  ngOnDestroy(){
    this.ingredientSubscription.unsubscribe();
  }
}
