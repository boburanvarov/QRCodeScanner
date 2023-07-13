import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API} from '../../constants/constants';
import {Route} from '../../Route/Route';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(body: any) {
        return this.http.post(API + 'auth/sign_in', body);
    }

    register(body: any): Observable<any> {
        return this.http.post(API + Route.V1 + Route.REGISTER, body);
    }

    getUserList() {
        return this.http.get(API + Route.V1 + 'list');
    }




}
