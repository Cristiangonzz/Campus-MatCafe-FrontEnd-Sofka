import Swal from 'sweetalert2';

export class SweetAlert {

  constructor() {}

  toFire(
    title: string,
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'question'
  ) {
    Swal.fire({
      title,
      text: message,
      icon: type,
      position: 'top-end',
      timer: 1500,
      color: '#96C0B7',
      showConfirmButton: false,
    });
  }
}
