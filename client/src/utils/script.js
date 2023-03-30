import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
	autoConnect: false,
});

export const connection = () => {
	socket.connect();
	socket.on('connect', () => {
		console.log('You connected to ', socket.id);
		console.log(socket.connected);
	});
};

export const sendMessage = (message = '', room = '') => {
	socket.emit('send-message', message, room);
};

// Make a request to join a room
export const joinRoom = room => {
	socket.emit('join-room', room);
};

export const receivedMessage = () => {
	socket.on('receive-message', message => {
		console.log(message);
	});
};

export let usersList = {};

export const assignUserId = (user, userId = socket.id) => {
	socket.emit('login', user, userId);
};

export const showUser = () => {
	socket.on('users-list', users => {
		usersList = { ...users };
	});
};
