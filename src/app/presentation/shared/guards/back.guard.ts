import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class BackGuard implements CanActivate {
  provider = loginUseCaseProviders;
  constructor(private readonly router: Router) {}
  canActivate(): Observable<boolean> {
    return this.provider.hasUserUseCaseProvaider
      .useFactory()
      .execute()
      .pipe(
        map((status: boolean) => {
          if (status) {
            this.router.navigate([`home`]);
            return false;
          } else {
            return true;
          }
        })
      );
  }
}
