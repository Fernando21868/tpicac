document.getElementById('generar-ticket').addEventListener('click', function() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var cant = document.getElementById('cantidad').value;
  var cat = document.getElementById('categoria').value;
  var resumenTotal;
  
  var nombreRegex = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var nombreValido = nombreRegex.test(nombre);
  var apellidoValido = nombreRegex.test(apellido);
  var emailValido = emailRegex.test(email);

  if (nombreValido && apellidoValido && emailValido && cant) {
    if (cat == 0) {
      cat = "Estudiante";
      resumenTotal = (200*0.2)*cant;
      document.getElementById('totalPagar').value = `$` + resumenTotal;
    } else if (cat == 1) {
      cat = "Trainee";
      resumenTotal = (200*0.5)*cant;
      document.getElementById('totalPagar').value = `$` + resumenTotal;
    } else if (cat == 2) {
      cat = "Junior";
      resumenTotal = (200*0.85)*cant;
      document.getElementById('totalPagar').value = `$` + resumenTotal;
    } else if (cat == 3) {
      cat = "Sin Categoría"
      resumenTotal = 200*cant;
      document.getElementById('totalPagar').value = `$` + resumenTotal;
    }
    } else {
      Swal.fire(
          'ERROR!',
          'Por favor, introduce datos válidos en todos los campos.',
          'error'
      )
  }
});