import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {DataStorageService} from '../shared/service/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  constructor(private dataStorageSRV : DataStorageService){}

  saveData()
  {
    this.dataStorageSRV.saveRecipsToDB();
  }

  getData()
  {
    this.dataStorageSRV.loadRecipsFromDB();
  }

}