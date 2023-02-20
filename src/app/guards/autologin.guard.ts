import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      switchMap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
          return of(false); // return Observable of false since user should not load login page
        } else {
          return of(true); // return Observable of true to allow access to the login
        }
      })
    );
  }
}
