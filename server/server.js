const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
	cors: {
		origin: '*',
	},
});

let rooms = {};
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

		socket.on('restart-game', () => {
			rooms = {};
			console.log(rooms);
		});
	});

	function declareWinner(room) {
		const player1 = rooms['p1Choice'];
		const player2 = rooms['p2Choice'];

		let winner = '';

		if (
			(player1 === 'scissors' && player2 === 'paper') ||
			(player1 === 'paper' && player2 === 'rock') ||
			(player1 === 'rock' && player2 === 'scissors')
		)
			winner = 'p1';
		else if (
			(player2 === 'scissors' && player1 === 'paper') ||
			(player2 === 'paper' && player1 === 'rock') ||
			(player2 === 'rock' && player1 === 'scissors')
		)
			winner = 'p2';
		else winner = 'd';

		io.to(room).emit('result', { winner: winner });
	}
});

server.listen(PORT, err => {
	if (err) console.log(err);

	console.log(`Server running on Port ${PORT}`);
});
