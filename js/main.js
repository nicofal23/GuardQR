// Obtener referencias a los elementos del formulario y al botón
const form = document.querySelector('.form');
const enviarBtn = document.querySelector('.btn');

// Agregar evento onclick al botón de enviar
enviarBtn.addEventListener('click', function() {
  // Mostrar mensaje personalizado en una alerta
  showAlert('Función fuera de servicio por el momento. Por favor, comuníquese a través de Whatsapp o redes sociales.');
  
  // Prevenir el envío del formulario
  event.preventDefault();
});

// Función para mostrar una alerta personalizada en el centro de la pantalla
function showAlert(message) {
  // Crear un elemento de alerta personalizado
  const alertElement = document.createElement('div');
  alertElement.className = 'custom-alert';
  alertElement.textContent = message;
  
  // Agregar el elemento de alerta a la página
  document.body.appendChild(alertElement);

  // Centrar el mensaje de alerta en la pantalla
  alertElement.style.top = `${window.innerHeight / 2 - alertElement.offsetHeight / 2}px`;
  alertElement.style.left = `${window.innerWidth / 2 - alertElement.offsetWidth / 2}px`;

  // Eliminar el mensaje de alerta después de un tiempo determinado
  setTimeout(function() {
    alertElement.remove();
  }, 3000); // 3000 milisegundos = 3 segundos (ajusta este valor si lo deseas)
}