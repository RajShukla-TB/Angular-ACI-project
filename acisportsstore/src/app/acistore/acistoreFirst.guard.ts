import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AciStoreComponent } from './acistore.component';

@Injectable()
export class AciStoreFirstGuard{
    private FN=true;//first navigation
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
        if(this.FN){
            this.FN=false;
            if(route.component!=AciStoreComponent){
                this.router.navigateByUrl("/")
                return false;
            }
        }
        return true;
    }
}