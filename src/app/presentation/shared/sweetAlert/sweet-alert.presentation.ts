import Swal from 'sweetalert2';

export class SweetAlert {
  toFire(
    title: string,
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'question',
    showConfirmButton?: boolean
  ) {
    Swal.fire({
      title,
      text: message,
      icon: type,
      position: 'top-end',
      timer: 3000,
      color: '#96C0B7',
      showConfirmButton: showConfirmButton ? showConfirmButton : false,
    });
  }
}
