import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUer = localStorage.getItem('empErpUser');
  const router = inject(Router);
  if(localUer != null){
    return true;
  }
  else{
    router.navigateByUrl('/login');
    return false;
  }
};
