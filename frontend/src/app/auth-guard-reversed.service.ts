import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { PromiseType } from 'protractor/built/plugins';
import { Injectable } from '@angular/core';
import { CheckingcookieService } from './checkingcookie.service';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AuthGuardReversed implements CanActivate{

    constructor(
        private logincheck_service : CheckingcookieService,
        private router: Router,

    ){}
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
      return new Promise(res =>{
        this.logincheck_service.logincheck().subscribe(
          response=>{
            if (response.Score==0){
              res(true);
            }else{
              console.log("Jest cookie")
              this.router.navigate(["/profile"])
              res(false);
            }
          },
          (error: HttpErrorResponse)=>{
              console.log("Błąd odpowiedzi auth")
              res(true);
          }
      )
      })
    }
}