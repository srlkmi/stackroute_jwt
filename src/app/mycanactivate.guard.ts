import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyauthenticateService } from './myauthenticate.service';
import { MyroutingService } from './myrouting.service';

@Injectable({
  providedIn: 'root'
})
export class MycanactivateGuard implements CanActivate {
  constructor(private authservice : MyauthenticateService,
    private routeserve : MyroutingService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let token=this.authservice.getMytoken();
     const boolans=this.authservice.isuserAuthorized(token);

      return boolans.then(
        (res)=>
        {
          if(!res)
          this.routeserve.openRegister();
          return res;
        }
      );

  }
  
}
