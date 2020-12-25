const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  // Enviar mensaje al cliente
  client.emit('enviarMensaje', {
      usuario: 'Admin',
      mensaje: 'Bienvenido al servidor'
  });

  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  });

  // Escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
      console.log(data);

      client.broadcast.emit('enviarMensaje', data);
  });
});