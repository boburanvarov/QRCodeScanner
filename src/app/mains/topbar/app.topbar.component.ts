import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {AppMainComponent} from '../main/app.main.component';
import {Router} from '@angular/router';
import {ConfirmationService, ConfirmEventType, MessageService, PrimeNGConfig} from 'primeng/api';
import {Utils} from '../Shared/Utils/Utils';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {

    user: any;
    fName: string;


    constructor(
        public appMain: AppMainComponent,
        public app: AppComponent,
        private route: Router,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private primengConfig: PrimeNGConfig
    ) {
    }

    ngOnInit() {
            this.user = Utils.getSessionStorage('roles');




    }

    logOut() {
        this.route.navigate(['/auth']);
        localStorage.removeItem('token');
        console.log(11);
    }

    confirm(event: Event) {
        console.log(this.user);
        this.confirmationService.confirm({
            target: event.target,
            message: 'Вы хотите выйти из приложения?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Да',
            rejectLabel: 'Нет',
            accept: () => {
                this.logOut();
            },
            reject: () => {

            }
        });
    }
}
