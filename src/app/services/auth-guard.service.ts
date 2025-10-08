import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private dataService: DataService, private localService: LocalStorageService) { }
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.dataService.tabType = next.data['type'];
debugger
    if (this.localService.getAccessToken()) {
      return true;
    } else {
      this.router.navigate(['/admin/404_page']);
      return false;
    }
  }


}