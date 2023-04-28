import Swal from 'sweetalert2';

export class SweetAlert {
  static toFire(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
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
