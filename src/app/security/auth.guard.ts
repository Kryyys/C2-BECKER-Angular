import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "./authentification.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!AuthentificationService.isLoggedIn()) {
    router.navigate(['/login']).then((e) => {
      if (!e) {
        console.error('Navigation has failed !');
      }
    });
    return false
  }
  return true;
};
