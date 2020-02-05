import Swal from 'sweetalert2';
Swal.fire({
  toast: true,
  position: 'top-end',
  icon: 'success',
  title: 'User Created in successfully',
  showConfirmButton: false,
  timer: 1500
});
window.Swal = Swal;
