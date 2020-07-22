import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {RecipeService} from '../shared/service/recipe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  constructor(private recipeSRV : RecipeService){}

  saveData()
  {
    this.recipeSRV.saveRecipsToDB();
  }

  getData()
  {
    this.recipeSRV.loadRecipsFromDB();
  }

}