import { useEffect, useContext } from 'react';

import icons from '../../data';

import { GameBodyContainer } from '../../components/game-body/game-body.styles';
import bgTriangle from '../../assets/images/bg-triangle.svg';
import Icon from '../../components/icon/icon.component';
import { SocketContext } from '../../contexts/socket.context';
import { GamePlayContainer, PlayerContainer } from '../../components/game-play/game-play.styles';
import { SecondPlayer } from '../../components/game-play/game-play.styles';

import { socket } from '../online/online.component';

const OnlineGameBody = () => {
	const {
		room,
		playerOneActive,
		setPlayerOneActive,
		playerTwoActive,
		setPlayerTwoActive,
		playerChoice,
		setPlayerChoice,
		gamePlay,
		setGamePlay,
	} = useContext(SocketContext);

	const sendChoice = () => {
		const choiceEvent = playerOneActive ? 'p1Choice' : 'p2Choice';
		socket.emit(choiceEvent, {});
	};

	useEffect(() => {
		socket.on('p1Choice', data => {
			console.log('p1 choice', playerOneActive);

			!playerOneActive && setPlayerTwoActive(true);
		});

		socket.on('p2Choice', data => {
			console.log('p2 choice', playerOneActive);

			playerOneActive && setPlayerTwoActive(true);
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

	const [{ image }] = icons.filter(({ title }) => title === playerChoice);

	return gamePlay ? (
		<GamePlayContainer>
			<PlayerContainer>
				<Icon key={1} title={playerChoice} image={image} />
				<p>You picked</p>
			</PlayerContainer>

			<PlayerContainer>{playerTwoActive && <SecondPlayer></SecondPlayer>}</PlayerContainer>
		</GamePlayContainer>
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
