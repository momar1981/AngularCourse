import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError, map , tap} from 'rxjs/operators';
import { AlertMessageService } from './alert-message.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authSRV : AuthService, private alertMessageSRV : AlertMessageService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newParams : HttpParams ;
    let req = request; 
    if(!request.params.has('auth'))
    {  
      newParams = request.params.append('auth'  , this.authSRV.getToken());
      req = request.clone({params:  newParams});
    }

    if(!request.params.has('Content-Type'))
    {  
      newParams = newParams.append('Content-Type'  , 'application/json');
      req = req.clone({params:  newParams});
    }

    if(!request.params.has('Content-Type'))
    {  
      newParams = newParams.append('Accept'  , 'application/json');
      req = req.clone({params:  newParams});
    }

    if(!request.params.has('_'))
    { 
      newParams = newParams.append('_' , String(new Date().getTime()));
      req = req.clone({params:  newParams});
    }
    
    const started = Date.now();
    return next.handle(req).
    pipe( 
        // tap((event: HttpEvent<any>) => {
        //   if (event instanceof HttpResponse) {
        //     const elapsed = Date.now() - started;
        //     console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        //   }
        // }),
        map((event: HttpEvent<any>) =>
          {
            if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            console.log('event--->>>', event);
            }
            return event;
          }
      ),
    
      catchError((error: HttpErrorResponse) => 
      {
        let message = "";
        if(error.status == 401)
          message = "Unauthorized";
        let alertObj =  {
          IsDialogOpen : true,
          AlertType : error.status ,
          Message : ((message === "") && error && error.error && error.error.error) ? error.error.error:message
        }
        this.alertMessageSRV.OpenDialog(alertObj);
        return throwError(error);
      })
    );
  }
}
