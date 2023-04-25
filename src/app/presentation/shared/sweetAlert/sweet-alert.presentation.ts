import Swal from 'sweetalert2';

export class SweetAlert {

  constructor() {}

  succes(title: string) {
    Swal.fire({
      position: 'top-end',
      icon:'success',
      title: title,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  error(title: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
