import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: User;

  constructor(private router: Router, private userService: UserService) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  /***
   *
   * @param next: ActivatedRouteSnapshot to give us access to the data (with some custom properties) property for a given route.
   * @param state: RouterStateSnapshot represents the state of the router as tree (url)
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUser) {
      if (next.data.roles && next.data.roles.indexOf(this.currentUser.role) === -1) {
        this.router.navigate(['/401']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return true;
  }

}
