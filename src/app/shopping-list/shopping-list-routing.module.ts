
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/Router';


import { ShoppingListComponent } from './shopping-list.component';
import { AuthService } from '../auth/auth.service';

const shoppingListRoutes : Routes = 
[
{path:'shopping-list', component:ShoppingListComponent, canActivate:[AuthService]},
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports:[RouterModule]
})
export class ShoppingListRoutingModule { }
