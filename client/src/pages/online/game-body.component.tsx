import { useEffect, useContext } from 'react';

import icons from '../../data';

import { GameBodyContainer } from '../../components/game-body/game-body.styles';
import Icon from '../../components/icon/icon.component';
import { SocketContext } from '../../contexts/socket.context';

import { socket } from '../online/online.component';
import OnlineGamePlay from './game-play.component';

const OnlineGameBody = (): JSX.Element => {
	const {
		room,
		resultOut,
		setResultOut,
		playerOneActive,
		setPlayerChoice,
		gamePlay,
		setGamePlay,
		setOpponent,
		setWinnerText,
		score,
		setScore,
		setDidWin,
	} = useContext(SocketContext);

	useEffect(() => {
		socket.on('p1Choice', ({ choice }) => {
			!playerOneActive && setOpponent(choice);
		});

		socket.on('p2Choice', ({ choice }) => {
			playerOneActive && setOpponent(choice);
		});

		return () => {
			socket.off('p1Choice');
			socket.off('p2Choice');
		};
	}, [playerOneActive]);

	const iconClickHandler = (e: any) => {
		setGamePlay(!gamePlay);
		const choice = e.target.closest('#icon-wrapper').value;
		setPlayerChoice(choice);

		const choiceEvent = playerOneActive ? 'p1Choice' : 'p2Choice';
		socket.emit(choiceEvent, { choice, room: room });
	};

	const startNewGame = () => {
		setGamePlay(false);
		setDidWin(false);
		socket.emit('restart-game');
	};

	useEffect(() => {
		socket.on('result', data => {
			setResultOut(!resultOut);
			const { winner } = data;

			if ((winner === 'p1' && playerOneActive) || (winner === 'p2' && !playerOneActive)) {
				setWinnerText(`you win`);
				setScore(score + 1);
				setDidWin(true);
			} else if (winner === 'p1' || winner === 'p2') {
				setWinnerText(`you lose`);
				score > 0 && setScore(score - 1);
			} else {
				setWinnerText(`It's a draw`);
			}
		});

		return () => {
			socket.off('result');
		};
	}, [resultOut]);

	return gamePlay ? (
		<OnlineGamePlay handler={startNewGame} />
	) : (
		<div>
			<GameBodyContainer>
				{icons.map(({ id, title, image }) => (
					<Icon key={id} iconId={id} title={title} image={image} handler={iconClickHandler} />
				))}
			</GameBodyContainer>
		</div>
	);
};

export default OnlineGameBody;
