import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { LocalStorageJwtService } from '../services/local-storage-jwt.service';

export const isUserLoggedInGuard = (): Observable<boolean | UrlTree> => {
  const storage = inject(LocalStorageJwtService);
  const router = inject(Router);

  return storage.getItem().pipe(
    map((token) => {
      if (!token) {
        // return router.parseUrl('/login');
        return true;
      }
      return true;
    }),
    take(1),
  );
};