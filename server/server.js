const io = require('socket.io')(3000, {
	cors: {
		origin: '*',
	},
});

const rooms = {};
io.on('connection', socket => {
	console.log(socket.id);

	//Join room
	socket.on('join-room', room => {
		socket.join(room);
		console.log(`You joined ${room}`);
		//rooms[room] = {};

		const roomSockets = io.sockets.adapter.rooms.get(room);
		const users = roomSockets ? [...roomSockets.keys()] : [];
		io.to(room).emit('updated-users', users);

		users.length === 2 && io.to(room).emit('start', `You started playing`);
	});

	socket.on('p1Choice', data => {
		const { choice, room } = data;
		rooms['p1Choice'] = choice;
		io.to(room).emit('p1Choice', { choice });

		rooms['p2Choice'] !== null && declareWinner(room);
		console.log(rooms);
	});

	socket.on('p2Choice', data => {
		const { choice, room } = data;
		rooms['p2Choice'] = choice;
		io.to(room).emit('p2Choice', { choice });

		rooms['p1Choice'] !== null && declareWinner(room);
		console.log(rooms);
	});

	function declareWinner(data) {}
});
