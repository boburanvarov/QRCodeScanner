import {GetRoleService} from '../Services/others/getRole.service';

export class Utils {
    private static roleService: GetRoleService;

    static clearSesionStorage() {
        sessionStorage.clear();
    }

    static setToSessionStorage(key: string, item: any) {
        return sessionStorage.setItem(key, JSON.stringify(item));
    }

    static getSessionStorage(key: string) {
        // @ts-ignore
        return JSON.parse(sessionStorage.getItem(key));
    }

    static paymoActive(item: string, roles: any) {
        if (roles.filter(r => r === item).length > 0) {
            return true;
        } else {
            return false;
        }
    }


}
