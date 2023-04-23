import { useContext } from 'react';
import icons from '../../data';

import GamePlay from '../game-play/game-play.component';
import Icon from '../icon/icon.component';

import { GameContext } from '../../contexts/game.context';

import { GameBodyContainer } from './game-body.styles';

const GameBody = (): JSX.Element => {
	const {
		firstPlayerChose,
		setFirstPlayerChose,
		setFirstPlayerTitle,
		isNewGameStart,
		setIsNewGameStart,
		setCompChose,
	} = useContext(GameContext);

	const iconClickHandler = (e: any) => {
		setFirstPlayerChose(!firstPlayerChose);
		setFirstPlayerTitle(e.target.closest('#icon-wrapper').value);
		setIsNewGameStart(!isNewGameStart);
		setCompChose(false);
	};

	console.log('player', firstPlayerChose);
	console.log('game start', isNewGameStart);

	return firstPlayerChose && isNewGameStart ? (
		<GamePlay />
	) : (
		<GameBodyContainer>
			{icons.map(({ id, title, image }) => (
				<Icon key={id} iconId={id} title={title} image={image} handler={iconClickHandler} />
			))}
		</GameBodyContainer>
	);
};

export default GameBody;
