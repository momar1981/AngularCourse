import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/Router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id : number;
  isEditMode = false;
  constructor(private aRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.aRoute.params.subscribe(
        (paramsArray : Params) => {
          this.id = +paramsArray['id'];
          this.isEditMode = paramsArray['id'] != null;
        }
      );

  }

}
