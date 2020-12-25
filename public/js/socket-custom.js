var socket = io();

socket.on("connect", function() {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
  console.log("Conexión con el servidor perdida");
});
// Enviar información
socket.emit("enviarMensaje", {
    usuario: "Putando",
    mensaje: "Guapito playo",
  },
  function(resp) {
    console.log(resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", function(message) {
  console.log(`${message.usuario} dice: ${message.mensaje}`);
});