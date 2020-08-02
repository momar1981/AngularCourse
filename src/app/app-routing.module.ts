
import { NgModule } from '@angular/core';
import { Routes,RouterModule,PreloadAllModules } from '@angular/Router';
import { HomeComponent } from './core/home/home.component';

const appRoutes : Routes = 
[
  {path:'',component: HomeComponent},
  //{path:'recipes',loadChildren: './recipes/recipes.module#RecipesModule'},
  {path:'recipes',loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
