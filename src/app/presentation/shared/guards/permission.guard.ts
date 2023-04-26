import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  provider = loginUseCaseProviders;
  constructor(
    private readonly router: Router,
  ) {}
  canActivate(): Observable<boolean> {
    return this.provider.hasUserUseCaseProvaider
      .useFactory()
      .execute()
      .pipe(
        map((status: boolean) => {
          if (status) {
            return true;
          } else {
            this.router.navigate([`login/sign-in`]);
            return false;
          }
        })
      );
  }
}
