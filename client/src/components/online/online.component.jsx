import { useContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import { SocketContext } from '../../contexts/socket.context';
import GameStart from '../game-start/game-start.component';

const socket = io('http://localhost:3000');

const Online = () => {
	const [room, setRoom] = useState('');
	const { sockets, setSocket, isPlaying, setIsPlaying } = useContext(SocketContext);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('You connected to ', socket.id);
			console.log(socket.connected);
		});

		socket.on('updated-users', users => {
			console.log(users);
			setSocket(users);
		});

		socket.on('error', message => {
			console.log(message);
		});

		socket.on('start', message => {
			console.log(message);
			setIsPlaying(!isPlaying);
		});

		return () => {
			socket.off('connect');
			socket.off('updated-users');
			socket.off('error');
			socket.off('start');
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
		<>
			{isPlaying ? (
				<GameStart />
			) : (
				<div>
					<form onSubmit={handleJoinRoom}>
						<input type='text' onChange={handleChangeRoom} aria-label='join-room' />
						<button type='submit'>Join Room</button>
					</form>

					<div>{sockets && sockets.map((socket, i) => <p key={i}>{socket}</p>)}</div>
				</div>
			)}
		</>
	);
};

export default Online;
