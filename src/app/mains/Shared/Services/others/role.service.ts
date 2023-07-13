import {Injectable} from '@angular/core';
import {GetRoleService} from './getRole.service';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(
        private getUserRoles: GetRoleService,
    ) {
    }

    public roleMatch(allowedRoles): boolean {
        let isMatch = false;
        const userRoles: any = this.getUserRoles.getUserRole().user_roles;
        console.log(userRoles);
        if (userRoles) {
            // @ts-ignore
            userRoles.filter((s) => {
                if (s === allowedRoles[0]) {
                    return isMatch = true;
                }
            });
        }
        return isMatch;
    }
}
