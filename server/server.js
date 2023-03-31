const io = require('socket.io')(3000, {
	cors: {
		origin: ['http://localhost:3001'],
	},
});

const users = {};

io.on('connection', socket => {
	console.log(socket.id);
	socket.on('send-message', (message, room) => {
		if (room === '') socket.broadcast.emit('receive-message', message);
		else socket.to(room).emit('receive-message', message, room);
	});

	//Join room
	socket.on('join-room', room => {
		socket.join(room);
	});

	socket.on('login', (user, userId) => {
		console.log('users', users);
		if (socket.connected) users[user] = userId;
		socket.emit('users-list', users);
	});
});
