// // Obtener referencias a los elementos del formulario y al botón
// const form = document.querySelector('.form');
// const enviarBtn = document.querySelector('.btn');

// // Agregar evento onclick al botón de enviar
// enviarBtn.addEventListener('click', function() {
//   // Mostrar mensaje personalizado en una alerta
//   showAlert('Función fuera de servicio por el momento. Por favor, comuníquese a través de Whatsapp o redes sociales.');
  
//   // Prevenir el envío del formulario
//   event.preventDefault();
// });

// // Función para mostrar una alerta personalizada en el centro de la pantalla
// function showAlert(message) {
//   // Crear un elemento de alerta personalizado
//   const alertElement = document.createElement('div');
//   alertElement.className = 'custom-alert';
//   alertElement.textContent = message;
  
//   // Agregar el elemento de alerta a la página
//   document.body.appendChild(alertElement);

//   // Centrar el mensaje de alerta en la pantalla
//   alertElement.style.top = `${window.innerHeight / 2 - alertElement.offsetHeight / 2}px`;
//   alertElement.style.left = `${window.innerWidth / 2 - alertElement.offsetWidth / 2}px`;

//   // Eliminar el mensaje de alerta después de un tiempo determinado
//   setTimeout(function() {
//     alertElement.remove();
//   }, 3000); // 3000 milisegundos = 3 segundos (ajusta este valor si lo deseas)
// }




// Agrega un evento de clic al botón "Enviar"
document.addEventListener('DOMContentLoaded', function() {
  const enviarBtn = document.getElementById('enviarBtn');

  enviarBtn.addEventListener('click', function() {
  // Obtiene el valor del campo de usuario y del campo de texto
  const usus = document.getElementById('telefono').value;
  const texto = document.getElementById('texto').value;
  const nombre = document.getElementById ('nombre').value;
  const mail = document.getElementById('email').value;

  // Verifica si el usuario existe en el arreglo de objetos (objetos)
  let encuentra = objetos.some(usu => usu.usuario === usus);

  if (encuentra) {
      // Obtiene el objeto de usuario correspondiente al usuario ingresado
      const usuario = objetos.find(usu => usu.usuario === usus);

      // Envía el correo electrónico con el contenido del campo de texto
      Email.send({
          SecureToken: "592b6b6e-5503-460c-9aff-a4d37556a5fb",
          To: usuario.mail,
          From: "falciglionicolas@gmail.com",
          Subject: "Recuperación de contraseña",
          Body: `Mensaje del usuario: ${texto}`
      }).then(
          message => Swal.fire({
              title: `Se envió el correo electrónico correctamente`,
              icon: 'success',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          })
      );
  } else {
      // Muestra un mensaje de error si el usuario no existe
      Swal.fire({
          title: `Usuario ${usus} inexistente`,
          icon: 'error',
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      });
  }
});});

