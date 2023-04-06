import { useContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

import { SocketContext } from '../../contexts/socket.context';

import OnlineGameStart from './game-start.component';
import Button from '../../components/button/button.component';

import './online.styles.scss';

export const socket = io('http://localhost:3000');

const Online = () => {
	const { room, setRoom, sockets, setSocket, isPlaying, setIsPlaying, setPlayerOneActive } =
		useContext(SocketContext);
	const [successMessage, setSuccessMessage] = useState('');

	useEffect(() => {
		socket.on('connect', () => {
			console.log('You connected to ', socket.id);
			console.log(socket.connected);
		});

		socket.on('updated-users', users => {
			console.log(users);
			setSocket(users);
		});

		socket.on('start', message => {
			setIsPlaying(!isPlaying);
		});

		return () => {
			socket.off('connect');
			socket.off('updated-users');
			socket.off('start');
		};
	}, [sockets]);

	const handleChangeRoom = (e: any) => {
		setRoom(e.target.value);
	};

	const handleCreateRoom = (e: any) => {
		e.preventDefault();
		socket.emit('join-room', room);
		setPlayerOneActive(true);
		setSuccessMessage('You created a room & joined');
	};

	const handleJoinRoom = (e: any) => {
		e.preventDefault();
		socket.emit('join-room', room);
	};

	return (
		<>
			{isPlaying ? (
				<OnlineGameStart />
			) : (
				<div className='room-container'>
					<form onSubmit={handleCreateRoom}>
						<input type='text' onChange={handleChangeRoom} aria-label='join-room' />
						<br />
						<Button type='submit' btnStyle='primary' children='create room' />
					</form>

					<form onSubmit={handleJoinRoom}>
						<input type='text' onChange={handleChangeRoom} aria-label='join-room' />
						<br />
						<Button type='submit' btnStyle='primary' children='join room' />
					</form>

					{/* <div>{sockets && sockets.map((socket, i) => <p key={i}>{socket}</p>)}</div> */}
					<p>{successMessage}</p>
				</div>
			)}
		</>
	);
};

export default Online;
