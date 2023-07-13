import { Injectable } from '@angular/core';
import {Utils} from '../../Utils/Utils';

@Injectable({
  providedIn: 'root'
})
export class GetRoleService {

  constructor() { }

    getUserToken(){
      const token = Utils.getSessionStorage('login');
      return !token ? null : token.token;
    }

    getUserRole(){
        const role = Utils.getSessionStorage('roles');
        return !role ? null : role;
    }
}
