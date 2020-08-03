import { Injectable } from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from '../../recipes/recipe.model';
import {AuthService} from '../../auth/auth.service'

import {map} from "rxjs/operators";
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';

@Injectable()

export class DataStorageService {

  constructor(private recipeSRV :RecipeService, private http : HttpClient,private authSRV: AuthService ) { }
  
  public loadRecipsFromDB()
  {
    let token = this.authSRV.getToken();
    
    // (this.http.get('https://recipe-book-demo-2020.firebaseio.com/recips.json',
    // {params : new HttpParams().append('auth',token),
    // observe:'response',//observe:'body'
    // responseType:'text'//responseType:'json'
    // })



    (this.http.get<Recipe[]>('https://recipe-book-demo-2020.firebaseio.com/recips.json',
    //{params : new HttpParams().append('auth',token)}
    // observe:'response',//observe:'body'
    // responseType:'text'//responseType:'json'
    )
    .pipe
    (
      map
      (
        (recips)=>
        {
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
    //let token = this.authSRV.getToken();
    (this.http.put
                ('https://recipe-book-demo-2020.firebaseio.com/recips.json',this.recipeSRV.getRecipesList()
                ,{
                 // params : new HttpParams().append('auth',token),
                  observe : 'events'
                })
    )
    .subscribe
    (
      (response : HttpEvent<object>) =>{console.log(response)}, 
      (error) =>{}
    );
  }

}
