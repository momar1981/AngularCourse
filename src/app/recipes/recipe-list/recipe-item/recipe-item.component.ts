import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeProp :Recipe;

  constructor(private recipeSRV : RecipeService) { }

  ngOnInit(): void {
    console.log(this.recipeProp);
  }

  onItemClicked(item : Recipe)
  {
    this.recipeSRV._SelectedRecipeItemEvent.emit(item);
  }  
}
