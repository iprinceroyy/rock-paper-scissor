import { useContext } from 'react';
import icons from '../../data';

import bgTriangle from '../../assets/images/bg-triangle.svg';
import GamePlay from '../game-play/game-play.component';
import Icon from '../icon/icon.component';

import { GameContext } from '../../contexts/game.context';

import { GameBodyContainer } from './game-body.styles';

const GameBody = () => {
	const {
		isBtnClicked,
		setIsBtnClicked,
		setBtnVal,
		isNewGameStart,
		setIsNewGameStart,
		setIsLoading,
	} = useContext(GameContext);

	const iconClickHandler = (e: any) => {
		setIsBtnClicked(true);
		setBtnVal(e.target.closest('#icon-wrapper').value);
		setIsNewGameStart(!isNewGameStart);
		setIsLoading(false);
	};

	return isBtnClicked && isNewGameStart ? (
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
