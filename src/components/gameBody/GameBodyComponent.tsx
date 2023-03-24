import { useContext } from 'react';
import icons from '../../data';

import bgTriangle from '../../assets/images/bg-triangle.svg';
import GamePlay from '../gamePlay/gamePlayComponent';
import Icon from '../Icon/iconComponent';

import { GameContext } from '../../contexts/gameContext';

import { GameBodyContainer } from './GameBodyStyles';

const GameBody = () => {
	const { isBtnClicked, setIsBtnClicked, setBtnVal } = useContext(GameContext);

	const iconClickHandler = (e: any) => {
		setIsBtnClicked(!isBtnClicked);
		setBtnVal(e.target.closest('#icon-wrapper').value);
	};

	return isBtnClicked ? (
		<GamePlay />
	) : (
		<GameBodyContainer imageUrl={bgTriangle}>
			{icons.map(({ id, title, image }) => (
				<Icon id={id} title={title} image={image} handler={iconClickHandler} />
			))}
		</GameBodyContainer>
	);
};

export default GameBody;
