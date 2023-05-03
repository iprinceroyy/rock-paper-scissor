import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { io } from 'socket.io-client';

import OnlineGameStart from './game-start.component';
import Button from '../../components/button/button.component';

import { setSockets, setRoom } from '../../redux/socket/socket.slice';
import { setPlayerOneActive, setIsPlaying } from '../../redux/players/online-players.slice';

import { FormInput, RoomContainer } from './room.styles';

export const socket = io(
	process.env.NODE_ENV === 'production'
		? 'https://rps-backend-i8oe.onrender.com'
		: 'http://localhost:4000'
);

const Room = (): JSX.Element => {
	const { room, sockets } = useAppSelector(state => state.socket);
	const { isPlaying } = useAppSelector(state => state.onlinePlayers);

	const [successMessage, setSuccessMessage] = useState('');

	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('connect', () => {
			console.log('You connected to ', socket.id);
			console.log(socket.connected);
		});

		socket.on('updated-users', users => {
			console.log(users);
			dispatch(setSockets(users));
		});

		socket.on('start', message => {
			dispatch(setIsPlaying(!isPlaying));
		});

		return () => {
			socket.off('connect');
			socket.off('updated-users');
			socket.off('start');
		};
	}, [sockets]);

	const handleChangeRoom = (e: any) => {
		dispatch(setRoom(e.target.value));
	};

	const handleCreateRoom = (e: any) => {
		e.preventDefault();
		socket.emit('join-room', room);
		dispatch(setPlayerOneActive(true));
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
				<RoomContainer>
					<form onSubmit={handleCreateRoom}>
						<FormInput type='text' onChange={handleChangeRoom} aria-label='join-room' />
						<br />
						<Button type='submit' btnStyle='primary' children='create room' />
					</form>

					<form onSubmit={handleJoinRoom}>
						<FormInput type='text' onChange={handleChangeRoom} aria-label='join-room' />
						<br />
						<Button type='submit' btnStyle='primary' children='join room' />
					</form>

					<p>{successMessage}</p>
				</RoomContainer>
			)}
		</>
	);
};

export default Room;
