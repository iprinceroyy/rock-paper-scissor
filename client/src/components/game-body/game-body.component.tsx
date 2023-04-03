import { useContext } from 'react';
import icons from '../../data';

import bgTriangle from '../../assets/images/bg-triangle.svg';
import GamePlay from '../game-play/game-play.component';
import Icon from '../icon/icon.component';

import { GameContext } from '../../contexts/game.context';

import { GameBodyContainer } from './game-body.styles';

const GameBody = () => {
	const {
		firstPlayerChose,
		setFirstPlayerChose,
		setFirstPlayerTitle,
		isNewGameStart,
		setIsNewGameStart,
		setCompChose,
	} = useContext(GameContext);

	const iconClickHandler = (e: any) => {
		setFirstPlayerChose(true);
		setFirstPlayerTitle(e.target.closest('#icon-wrapper').value);
		setIsNewGameStart(!isNewGameStart);
		setCompChose(false);
	};

	return firstPlayerChose && isNewGameStart ? (
		<GamePlay />
	) : (
		<GameBodyContainer imageUrl={bgTriangle}>
			{icons.map(({ id, title, image }) => (
				<Icon key={id} title={title} image={image} handler={iconClickHandler} />
			))}
		</GameBodyContainer>
	);
};

export default GameBody;
