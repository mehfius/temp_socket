const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuração do CORS
app.use(cors());

// Configuração de rota de exemplo
app.get('/', (req, res) => {
  res.send('Servidor Socket.io está ativo!');
});

// Configuração do Socket.io
io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  socket.emit('mensagem', 'Conexão estabelecida');

  socket.on('mensagem_do_cliente', (data) => {
    console.log('Mensagem do cliente:', data);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Servidor Socket.io está ouvindo na porta ${PORT}`);
});
