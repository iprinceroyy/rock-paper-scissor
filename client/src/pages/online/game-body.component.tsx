import { useState, useEffect, useContext } from 'react';

import icons from '../../data';

import { GameBodyContainer } from '../../components/game-body/game-body.styles';
import bgTriangle from '../../assets/images/bg-triangle.svg';
import Icon from '../../components/icon/icon.component';
import { SocketContext } from '../../contexts/socket.context';
import {
	GamePlayContainer,
	GameResult,
	PlayerContainer,
} from '../../components/game-play/game-play.styles';
import { SecondPlayer } from '../../components/game-play/game-play.styles';

import { socket } from '../online/online.component';

const OnlineGameBody = () => {
	const [resultOut, setResultOut] = useState(false);
	const [winnerText, setWinnerText] = useState('');
	const [opponent, setOpponent] = useState('paper');
	const [playerTwoActive, setPlayerTwoActive] = useState(false);
	const { room, playerOneActive, playerChoice, setPlayerChoice, gamePlay, setGamePlay } =
		useContext(SocketContext);

	useEffect(() => {
		socket.on('p1Choice', data => {
			const { choice } = data;
			console.log('p1 choice', playerOneActive);

			!playerOneActive && setPlayerTwoActive(true);
			!playerOneActive && setOpponent(choice);
		});

		socket.on('p2Choice', data => {
			const { choice } = data;

			console.log('p2 choice', playerOneActive);

			playerOneActive && setPlayerTwoActive(true);
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

	useEffect(() => {
		socket.on('result', data => {
			setResultOut(!resultOut);
			const { winner } = data;

			if ((winner === 'p1' && playerOneActive) || (winner === 'p2' && !playerOneActive))
				setWinnerText(`You win`);
			else if (winner === 'p1' || winner === 'p2') setWinnerText(`You lose`);
			else setWinnerText(`It's a draw`);
		});

		return () => {
			socket.off('result');
		};
	}, [resultOut]);

	const [{ image }] = icons.filter(({ title }) => title === playerChoice);

	const [{ image: oppImage, title: oppTitle }] = icons.filter(({ title }) => title === opponent);

	console.log('player 2', playerTwoActive);

	return gamePlay ? (
		<>
			<GamePlayContainer>
				<PlayerContainer>
					<Icon key={1} title={playerChoice} image={image} />
					<p>You picked</p>
				</PlayerContainer>

				<PlayerContainer>
					{resultOut ? (
						<SecondPlayer></SecondPlayer>
					) : (
						<Icon key={2} title={oppTitle} image={oppImage} />
					)}
				</PlayerContainer>
			</GamePlayContainer>
			<GameResult>
				<p>{!resultOut && winnerText}</p>
			</GameResult>
		</>
	) : (
		<div>
			<GameBodyContainer imageUrl={bgTriangle}>
				{icons.map(({ id, title, image }) => (
					<Icon key={id} title={title} image={image} handler={iconClickHandler} />
				))}
			</GameBodyContainer>
		</div>
	);
};

export default OnlineGameBody;
