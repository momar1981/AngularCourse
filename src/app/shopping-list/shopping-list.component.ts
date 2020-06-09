import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit {
  
  ingredients : Ingredient []= [];

  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void 
  {
    this.ingredients = this.shoppingListSRV._Ingredients;
    this.shoppingListSRV._AddIngredientEvent.subscribe(x=> x = this.ingredients);
  }
  
  onItemClicked(selecedIngredient : Ingredient)
  {
    this.shoppingListSRV._SelectedIngredient =  selecedIngredient;
  }
}
