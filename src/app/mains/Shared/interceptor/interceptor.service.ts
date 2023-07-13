import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {LoadingService} from '../Services/loading.service';
import {GetRoleService} from '../Services/others/getRole.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(
      private loadingService: LoadingService,
      private roleService: GetRoleService,
      private router: Router
  ){ }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authHeaderString = this.roleService.getUserToken();
      this.loadingService.isLoading.next(true);

      if (authHeaderString) {
          req = req.clone({
              setHeaders: {
                  Authorization: 'Bearer ' + authHeaderString,
              },
          });
      }
      return next.handle(req).pipe(
          // @ts-ignore
          catchError((err) => {
              if (err && err.status === 401) {
                  this.router.navigate(['/auth']);
              } else {
                  return next.handle(req);
              }
          }),
        finalize(
          () => {
            this.loadingService.isLoading.next(false);
          }
        )
      );
  }
}

