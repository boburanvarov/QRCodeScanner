import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {GetRoleService} from '../Services/others/getRole.service';
import {RoleService} from '../Services/others/role.service';
import {Route} from '../Route/Route';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private roleService: RoleService,
        private getRoleService: GetRoleService
    ) { }


    canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {

        const token =  this.getRoleService.getUserToken();
        const role = route.data.roles as Array<string>;
        console.log(role);
        if (role && token) {
            const match = this.roleService.roleMatch(role);
            if (match) {
                return true;
            } else {
                this.router.navigate(['**']);
                return false;
            }
        }

        this.router.navigate(['/auth']);
        return false;

    }


}
