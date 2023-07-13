import {AppComponent} from '../../app.component';
import {Component, OnInit} from '@angular/core';
import {Route} from '../Shared/Route/Route';
import {Utils} from '../Shared/Utils/Utils';
import {Role} from '../Shared/Models/role';

@Component({
    selector: 'app-menu',
    // templateUrl: './app.menu.component.html',
    template: `
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model; let i = index">
                <li
                    app-menuitem
                    *ngIf="item.actived"
                    [item]="item"
                    [index]="i"
                    [root]="true"
                ></li>
            </ng-container>

        </ul>
    `,
    styleUrls: ['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {

    roles: any;
    model: any[];

    constructor(
        public app: AppComponent,
    ) {
    }

    ngOnInit() {
        this.roles = Utils.getSessionStorage('roles');
        this.model = [
            {
                label: 'Goods ',
                icon: 'pi pi-shopping-cart',
                routerLink: [`../${Route.GOODS}`],
                actived: true,
            },
            {
                label: 'Scaner ',
                icon: 'fas fa-qrcode',
                routerLink: [`../${Route.SCAN}`],
                actived: true,
            },
        ];

    }


}
