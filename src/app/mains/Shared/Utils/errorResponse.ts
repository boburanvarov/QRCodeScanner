import Swal from 'sweetalert2';
import {error} from 'protractor';

export class ErrorResponse {
    static ErrorResponse(status: number, text: string) {
        Swal.fire({
            icon: 'error',
            title: ` ${status}`,
            text: `${text}`
        });


    }
}
