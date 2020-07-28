import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/service/recipe.service';
import { Router, ActivatedRoute} from '@angular/Router';
import {DataStorageService} from '../../shared/service/data-storage.service';
import {Subscription} from'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes  : Recipe [] = []; 
  recipesChnagedSubjectSubscription : Subscription;
  
  constructor(private dataStorageSRV : DataStorageService, private recipeSRV : RecipeService,private router: Router, private aRoute: ActivatedRoute ) 
  { }

  ngOnInit(): void 
  
  {
    if(this.aRoute.snapshot.queryParams['fetchdata'] != null)
    {
      if(this.aRoute.snapshot.queryParams['fetchdata'] === "true")
        this.dataStorageSRV.loadRecipsFromDB();
    }

    this.recipes = this.recipeSRV.getRecipesList();
    this.recipesChnagedSubjectSubscription = this.recipeSRV.recipesChnagedSubject.subscribe((recipes : Recipe [])=>{
      this.recipes = recipes;
    });
  }
  
  doNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.aRoute})
  }
  ngOnDestroy(){
    this.recipesChnagedSubjectSubscription.unsubscribe();
  }
}
