import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../shared/service/recipe.service';
import { Router,ActivatedRoute } from '@angular/Router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeProp :Recipe;

  constructor(private recipeSRV : RecipeService, private router : Router, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
