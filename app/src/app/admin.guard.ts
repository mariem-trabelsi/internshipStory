import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { InternsService } from './services/interns.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public internService:InternsService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.internService.isAdmin())
      {
        return true;
      }
      else{
        this.router.navigate(['/forbidden']);
        return false;  
      }
   
  }
  
}
