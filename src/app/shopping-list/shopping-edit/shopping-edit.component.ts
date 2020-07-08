
import { NgForm } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit 
{
  
  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void {
    
  }

  addIngredient(form: NgForm)
  {
    const formValues = form.value;
    const newIngredient : Ingredient = new Ingredient(formValues.nameInput,
      Number(formValues.amountInput));
      this.shoppingListSRV.AddIngredient(newIngredient);
  }

  deleteIngredient()
  {
    this.shoppingListSRV.DeleteIngredient();
  }
  
  clearIngredients()
  {
    this.shoppingListSRV.ClearIngredients();
  }
}
