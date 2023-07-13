import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../mains/Shared/Services/Auth/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Utils} from '../../mains/Shared/Utils/Utils';
import {Route} from '../../mains/Shared/Route/Route';
import {error} from 'protractor';
import {ErrorResponse} from '../../mains/Shared/Utils/errorResponse';
import VanillaTilt from 'vanilla-tilt';
import {FilterService} from '../../mains/Shared/Services/filter.service';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
    styleUrls: ['./app.login.component.scss']
})
export class AppLoginComponent implements OnInit, OnDestroy {

    dark: boolean;
    password: string | number;
    username: string;
    userLoginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService,
        private filterService: FilterService,
        private fb: FormBuilder,
    ) {
    }

    ngOnInit(): void {

        Utils.clearSesionStorage();
        setTimeout(() => {
            VanillaTilt.init(document.querySelectorAll('.login100-pic') as any);
        }, 1);

    }


    ngOnDestroy(): void {
    }



    signIn() {
        if (this.userLoginForm.invalid) {
            this.userLoginForm.markAllAsTouched();
            this.messageService.add({
                severity: 'error',
                summary: 'Запольните необходимие поля'
            });
            return;
        }
        console.log('submitted');
        const login = this.userLoginForm.value;

        const body = {
            username: login.username,
            password: login.password,
        };

        this.authService.login(body).subscribe(res => {
            Utils.setToSessionStorage('login', res);

        }, (error: any) => {
            console.log('appLogin:', error);
            if (error.status === 400 || error.status === 404) {
                ErrorResponse.ErrorResponse(error.status, error.error.error);
            }

        });


    }


}
