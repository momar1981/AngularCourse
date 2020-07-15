
import { NgForm } from '@angular/forms'
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/service/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy 
{
  @ViewChild('formLR') formVC : NgForm;
  selectedIngredientSubscription : Subscription;
  buttonTarget = 'Add';
  
  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void {
    this.selectedIngredientSubscription = 
      this.shoppingListSRV._SelectedIngredientSubject.subscribe((ingredient :Ingredient) =>{
        this.formVC.form.patchValue({
          nameInput:ingredient.name,
          amountInput:ingredient.amount,
        });
        this.buttonTarget = 'Edit'; 
    });
  }

  addEditIngredient()
  {
    const formValues = this.formVC.value;
    const ingredientObj : Ingredient = new Ingredient(formValues.nameInput,
      Number(formValues.amountInput));
    if(this.buttonTarget == 'Add')
      this.shoppingListSRV.AddIngredient(ingredientObj);
    else // Edit
      this.shoppingListSRV.EditIngredient(ingredientObj);

      //clear Ingredients
      this.clearIngredients();
  }

  deleteIngredient()
  {
    this.shoppingListSRV.DeleteIngredient();
    
    //clear Ingredients
    this.clearIngredients();
  }
  
  clearIngredients()
  {
    this.formVC.reset();
    this.buttonTarget = 'Add';
  }

  ngOnDestroy()
  {
    this.selectedIngredientSubscription.unsubscribe();
  }
}
