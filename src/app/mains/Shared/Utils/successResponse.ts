import Swal from 'sweetalert2';

export class SuccessResponse {
    static successResponse(status: number, text: string) {
        if (status === 200) {
            Swal.fire({
                icon: 'success',
                title: ` ${status}`,
                text: `${text}`
            });
        } else if (status === 201) {
            Swal.fire({
                icon: 'success',
                title: `${status}`,
                text: `${text}`
            });
        } else if (status === 202) {
            Swal.fire({
                icon: 'success',
                title: ` ${status}`,
                text: `${text}`
            });
        }
    }
}
