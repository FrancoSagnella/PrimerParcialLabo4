import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoGuardGuard implements CanActivate {

  constructor(private authSvc:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkearUsuario();
  }
  async checkearUsuario() {
    const user = await this.authSvc.getCurentUser();
    if(user){
      if(user.email == 'admin@admin.com')
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl('/errorAdmin');
        return false;
      }
    }
    else
    {
      this.router.navigateByUrl('/error');
      return false;
    }
  }
}
