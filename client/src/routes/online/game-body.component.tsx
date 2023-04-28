import { useEffect, useContext } from 'react';

import icons from '../../data';
import { SocketContext } from '../../contexts/socket.context';
import { socket } from './room.component';

import Icon from '../../components/icon/icon.component';
import OnlineGamePlay from './game-play.component';

import { GameBodyContainer } from '../../styles/game-body.styles';

const OnlineGameBody = (): JSX.Element => {
	const { room, playerOneActive, setPlayerChoice, gamePlay, setGamePlay, setOpponent } =
		useContext(SocketContext);

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
	}, []);

	const iconClickHandler = (e: any) => {
		setGamePlay(!gamePlay);
		const choice = e.target.closest('#icon-wrapper').value;
		setPlayerChoice(choice);

		const choiceEvent = playerOneActive ? 'p1Choice' : 'p2Choice';
		socket.emit(choiceEvent, { choice, room: room });
	};

	return gamePlay ? (
		<OnlineGamePlay />
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
