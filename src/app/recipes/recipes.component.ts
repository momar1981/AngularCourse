import { Component, OnInit } from '@angular/core';
import { RecipeService } from './service/recipe.service';
import { Recipe } from './recipe.model';
import { ActivatedRoute } from '@angular/Router'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeItem : Recipe;
  initialMessage : string ; 
  constructor(private recipeSRV :RecipeService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.initialMessage = this.aRoute.snapshot.data['InitialMessage'];
    this.recipeSRV._SelectedRecipeItemEvent.subscribe(x=> this.initialMessage = x);
  }

}
