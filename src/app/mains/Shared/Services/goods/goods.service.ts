import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from '../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class GoodsService {

    constructor(private http: HttpClient) {
    }

    goodsCreate(body: any) {
        return this.http.post(API + 'goods', body);
    }
    getGoods() {
        return this.http.get(API + 'goods', );
    }
}
