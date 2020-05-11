import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit 
{
@ViewChild('nameInput') txtName : ElementRef; 
@ViewChild('amountInput') txtAmount : ElementRef; 
@Output() ingredient_add = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  // addIngredient(txtName: HTMLInputElement,txtAmount: HTMLInputElement)
  // {
  //     this.ingredient_add.emit({name : txtName.value , amount : Number(txtAmount.value)});
  // }

  addIngredient_VC()
  {
    const newIngredient : Ingredient = new Ingredient(this.txtName.nativeElement.value,
      Number(this.txtAmount.nativeElement.value));
    this.ingredient_add.emit(newIngredient);
  }
}
