import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivateChild,Router } from '@angular/Router';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
@Injectable()
export class AuthService implements CanActivate,CanActivateChild {

  token = '';
  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    let authStatus = false;
    if(this.isAuth())
      authStatus =  true;
    return authStatus;
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.canActivate(route,state);
  }

  public SignUp(email: string, password: string)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  public SignIn(email: string, password: string)
  {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((response: firebase.auth.UserCredential)=>{
      firebase.auth().currentUser.getIdToken()
      .then((token : string)=>{
        this.token = token;
        this.router.navigate(['/recipes'],{queryParams:{'fetchdata':true}});
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  public getToken()
  {
    if(firebase.auth().currentUser)
    {
      firebase.auth().currentUser.getIdToken()
      .then((token : string)=>{
        this.token = token;
      });
    }
    return this.token;
  }
  public SignOut()
  {
    firebase.auth().signOut()
    .then(function() {
      //this.router.navigate(['/signin']);
    })
    .catch(function(error) {
      // An error happened.
    });
    this.token = '';
  }
  public isAuth()
  {
    return this.token != "";
  }
}
