const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const { trainAndSave, setUserMessage, getMessageHarry } = require('./training');

trainAndSave();

io.on('connection', socket => {
  console.log('Usuario conectado');
  const userHarry = 'Harry Potter';

  socket.on('message', async ({ username, message }) => {
    setUserMessage(message);

    let messageHarry = await getMessageHarry();
    io.emit('message', { username, message, userHarry, messageHarry });
  });
});

http.listen(4000, () => {
  console.log('Listening on port 4000');
});
