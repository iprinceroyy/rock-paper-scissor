import { useContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import { SocketContext } from '../../contexts/socketContext';

const socket = io('http://localhost:3000');

const Online = () => {
	const [room, setRoom] = useState('');
	const { sockets, setSocket } = useContext(SocketContext);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('You connected to ', socket.id);
			console.log(socket.connected);
		});

		socket.on('updated-users', users => {
			console.log(users);
			setSocket(users);
		});

		return () => {
			socket.off('connect');
			socket.off('updated-users');
		};
	}, [sockets]);

	const handleChangeRoom = e => {
		setRoom(e.target.value);
	};

	const handleJoinRoom = e => {
		e.preventDefault();
		socket.emit('join-room', room);
	};

	return (
		<div>
			<form onSubmit={handleJoinRoom}>
				<input type='text' onChange={handleChangeRoom} aria-label='join-room' />
				<button type='submit'>Join Room</button>
			</form>

			<div>{sockets && sockets.map((socket, i) => <p key={i}>{socket}</p>)}</div>
		</div>
	);
};

export default Online;
