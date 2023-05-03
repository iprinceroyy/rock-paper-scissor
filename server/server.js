const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: '*',
	},
});

let rooms = { p1Choice: null, p2Choice: null };
io.on('connection', socket => {
	//Join room
	socket.on('join-room', room => {
		let roomSockets = io.sockets.adapter.rooms.get(room);
		let users = roomSockets ? [...roomSockets.keys()] : [];
		users.length <= 1 && socket.join(room);

		roomSockets = io.sockets.adapter.rooms.get(room);
		users = roomSockets ? [...roomSockets.keys()] : [];
		io.to(room).emit('updated-users', users);

		users.length === 2 && io.to(room).emit('start', `You started playing`);

		socket.on('p1Choice', data => {
			const { choice, room } = data;
			rooms['p1Choice'] = choice;
			io.to(room).emit('p1Choice', { choice });

			rooms.p2Choice !== null && declareWinner(room);
		});

		socket.on('p2Choice', data => {
			const { choice, room } = data;
			rooms['p2Choice'] = choice;
			io.to(room).emit('p2Choice', { choice });

			rooms.p1Choice !== null && declareWinner(room);
		});
	});

	function declareWinner(room) {
		const player1 = rooms['p1Choice'];
		const player2 = rooms['p2Choice'];
		let winner = null;

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
		rooms = { p1Choice: null, p2Choice: null };
	}
});

server.listen(4000, err => {
	if (err) console.log(err);
	console.log(`Server running on Port 4000`);
});
