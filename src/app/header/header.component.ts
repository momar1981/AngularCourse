import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {DataStorageService} from '../shared/service/data-storage.service';
import {AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  constructor(private dataStorageSRV : DataStorageService,private authSRV: AuthService){}

  saveData()
  {
    this.dataStorageSRV.saveRecipsToDB();
  }

  getData()
  {
    this.dataStorageSRV.loadRecipsFromDB();
  }

  signOut(){
    this.authSRV.SignOut();
  }

  isAuth()
  {
    return this.authSRV.isAuth();
  }
}