import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params} from '@angular/Router';
import {RecipeService} from '../../shared/service/recipe.service'
import {Recipe} from '../recipe.model';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id : number;
  isEditMode = false;
  recipeObj : Recipe;
  iForm : FormGroup ; 
  
  constructor(private recipeSRV : RecipeService ,private aRoute: ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {

    this.aRoute.params.subscribe(
        (paramsArray : Params) => {
          this.id = +paramsArray['id'];
          this.isEditMode = paramsArray['id'] != null;
          this.initForm();
  
        }
      );

  }
  
  private initForm()
  {
    this.recipeObj = new Recipe(0,'','','',[]);
    if(this.isEditMode)
      this.recipeObj = this.recipeSRV.getRecipe(this.id);

    this.iForm =  new FormGroup({
      "name" : new FormControl(this.recipeObj.name,Validators.required),
      "imagePath" : new FormControl(this.recipeObj.imagePath,Validators.required),
      "description" :new FormControl(this.recipeObj.description,Validators.required),
      "ingredientsList": new FormArray([])
    });

    if(this.recipeObj.ingredientsList)
      this.recipeObj.ingredientsList.forEach(x=> this.onAddIngredient(x.name,x.amount));
  }

  onAddIngredient(name : string,amount : number)
  {

    const nameControl = new FormControl(name,Validators.required);
    const amountControl = new FormControl(amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]);
    (<FormArray>this.iForm.get('ingredientsList')).push(
      new FormGroup({'name' : nameControl,'amount': amountControl})
      );
  }

  onDeleteIngredient(ingredientIndex : number)
  {
    (<FormArray>this.iForm.get('ingredientsList')).removeAt(ingredientIndex);
  }

  onSubmit()
  {
    if(this.isEditMode)
      this.recipeSRV.updateRecipe(this.id,this.iForm.value);
    else
      this.recipeSRV.addNewRecipe(this.iForm.value);
      this.doCancel();
  }

  doCancel()
  {
    this.iForm.reset;
    this.router.navigate(['/']);
  }

}
