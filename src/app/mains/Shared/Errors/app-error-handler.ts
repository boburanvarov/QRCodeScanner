import {ErrorHandler, Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AppErrorHandler implements ErrorHandler {
    constructor(private router: Router) {
    }

    handleError(error: any) {

        if (error.status === 401 ) {
         this.router.navigate(['/auth']);
        }

        if (error.status === 400 || error.status === 404) {
            console.log(error);
            if(error.error.error) {
                Swal.fire({
                    icon: 'error',
                    title: `Произошла ошибка... ${error.status}`,
                    text: `${error.error.error}`
                });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: `Произошла ошибка... ${error.status }`,
                    text: `${error.error.message }`
                });
            }
        }else if (error.status === 500 || error.status === 504) {
            if(error.error.error) {
                Swal.fire({
                    icon: 'warning',
                    title: `Произошла ошибка... ${error.status}`,
                    text: 'Что-то пошло не так!'
                });
            }else{
                    Swal.fire({
                        icon: 'warning',
                        title: `Произошла ошибка... ${error.status }`,
                        text: `${error.error.message }`
                    });
                }
            }
        }





}
