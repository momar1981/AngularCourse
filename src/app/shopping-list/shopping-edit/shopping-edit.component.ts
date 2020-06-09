import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit 
{
@ViewChild('nameInput') txtName : ElementRef; 
@ViewChild('amountInput') txtAmount : ElementRef; 
  constructor(private shoppingListSRV : ShoppingListService) { }

  ngOnInit(): void {
  }

  // addIngredient(txtName: HTMLInputElement,txtAmount: HTMLInputElement)
  // {
  //     this.ingredient_add.emit({name : txtName.value , amount : Number(txtAmount.value)});
  // }

  addIngredient()
  {
    const newIngredient : Ingredient = new Ingredient(this.txtName.nativeElement.value,
      Number(this.txtAmount.nativeElement.value));
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
