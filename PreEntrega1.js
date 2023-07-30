let userGuardado = "armando";
let passGuardada = "casas";
let intentos = 0;
const maxIntentos = 1;

function login() {
  let user, pass;

  // Bucle para controlar los intentos
  do {
    user = document.getElementById("usuario").value.toLowerCase().trim();
    pass = document.getElementById("contraseña").value.toLowerCase().trim();

    if (user === userGuardado && pass === passGuardada) {
      alert(`Bienvenido/a ${user}`);
      return; // credenciales correctas, sale de la función
    } else {
      intentos++;

      if (intentos = 1) {
        alert("Credenciales inválidas.");
        alert ( "Tu cuenta ha sido bloqueada.");
    
      } 
    }
  } while (intentos < maxIntentos);
}















