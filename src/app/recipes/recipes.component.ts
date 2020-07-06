import { Component, OnInit } from '@angular/core';
import { RecipeService } from './service/recipe.service';
import { Recipe } from './recipe.model';
import { ActivatedRoute, Params } from '@angular/Router'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeItem : Recipe;
  // initialMessage : string ; 
  constructor( private aRoute : ActivatedRoute) { }

  ngOnInit(): void {

  }

}
