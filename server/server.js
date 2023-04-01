const io = require('socket.io')(3000, {
	cors: {
		origin: ['http://localhost:3001', '*'],
	},
});

io.on('connection', socket => {
	console.log(socket.id);

	//Join room
	socket.on('join-room', room => {
		socket.join(room);
		console.log(`You joined ${room}`);

		const roomSockets = io.sockets.adapter.rooms.get(room);
		const users = roomSockets ? [...roomSockets.keys()] : [];
		io.to(room).emit('updated-users', users);
	});
});
