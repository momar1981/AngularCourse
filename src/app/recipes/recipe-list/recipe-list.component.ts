import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A Test Recipe','This is simply Description','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0_yeHO_Wv7q65HAMOHYwshnD4r47E6zdaJa2Hn2h0lUaseD_B&usqp=CAU')];
  constructor() { }

  ngOnInit(): void {
  }

}
