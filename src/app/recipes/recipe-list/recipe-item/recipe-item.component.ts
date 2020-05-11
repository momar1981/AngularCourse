import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeProp :Recipe;
@Output() outRecipeItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipeProp);
  }

  onItemClicked(item : Recipe)
  {
    this.outRecipeItem.emit(item);
  }  
}
