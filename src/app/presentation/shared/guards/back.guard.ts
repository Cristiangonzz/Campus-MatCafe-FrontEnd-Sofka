import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class BackGuard implements CanActivate {
  provider = loginUseCaseProviders;
  constructor(private readonly router: Router) {}
  canActivate(): Observable<boolean> {
    return this.provider.hasUserUseCaseProvider
      .useFactory()
      .execute()
      .pipe(
        map((status: boolean) => {
          if (status) {
            this.router.navigate([`course/get-all`]);
            return false;
          } else {
            return true;
          }
        })
      );
  }
}
