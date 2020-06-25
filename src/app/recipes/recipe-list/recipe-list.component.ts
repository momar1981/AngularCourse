import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';
import { Router, ActivatedRoute} from '@angular/Router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes  : Recipe [] = [];                
  constructor(private recipeService : RecipeService,private router: Router, private aRoute: ActivatedRoute ) 
  { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipesList();
  }
  
  doNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.aRoute})
  }
}
