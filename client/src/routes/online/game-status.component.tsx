import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { socket } from './room.component';

import {
	setOpponentPickedMessage,
	setOpponentRestartedMessage,
} from '../../redux/status/opponent-status.slice';

import { GameStatusContainer } from './game-status.styles';

const GameStatus = (): JSX.Element => {
	const { resultOut } = useAppSelector(state => state.onlineScorer);
	const { gamePlay } = useAppSelector(state => state.onlinePlayers);
	const { opponentPickedMessage, opponentRestartedMessage } = useAppSelector(
		state => state.opponentStatus
	);

	const [leftMessage, setLeftMessage] = useState('');

	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('status', message => {
			dispatch(setOpponentPickedMessage(message));
		});

		socket.on('connected', () => {
			setLeftMessage('opponent reconnected!');

			setTimeout(() => {
				setLeftMessage('');
			}, 1000);
		});

		socket.on('disconnected', message => {
			setLeftMessage(message);
			dispatch(setOpponentPickedMessage(''));
			dispatch(setOpponentRestartedMessage(''));
		});

		dispatch(setOpponentRestartedMessage(''));

		return () => {
			socket.off('status');
			socket.off('connected');
			socket.off('disconnected');
		};
	}, []);

	return (
		<GameStatusContainer>
			{!resultOut && <p>{opponentPickedMessage}</p>}
			{gamePlay && resultOut && <p>{opponentRestartedMessage}</p>}
			<p>{leftMessage}</p>
		</GameStatusContainer>
	);
};

export default GameStatus;
