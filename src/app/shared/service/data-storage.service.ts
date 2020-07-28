import { Injectable } from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from '../../recipes/recipe.model';
import {AuthService} from '../../auth/auth.service'

import {map} from "rxjs/operators";
import { Http,Response } from '@angular/http';

@Injectable()

export class DataStorageService {

  constructor(private recipeSRV :RecipeService, private http : Http,private authSRV: AuthService ) { }
  
  public loadRecipsFromDB()
  {
    let token = this.authSRV.getToken();
    (this.http.get('https://recipe-book-demo-2020.firebaseio.com/recips.json?auth='+token)
    .pipe
    (
      map
      (
        (response: Response)=>
        {
          let recips = response.json();
          recips.forEach(element => {
            if(!element['ingredientsList'])
              element.ingredientsList = [];
          });
          return recips;
        }
      )
    ))
    .subscribe
    (
      (dbRecipes : Recipe[]) =>
      {
        this.recipeSRV.setRecipes(dbRecipes);
      },
      (error) =>{}
    );  
  }

  saveRecipsToDB()
  {
    let token = this.authSRV.getToken();
    (this.http.put('https://recipe-book-demo-2020.firebaseio.com/recips.json?auth='+token,this.recipeSRV.getRecipesList()))
    .subscribe
    (
      (response) =>{},
      (error) =>{}
    );
  }

}
