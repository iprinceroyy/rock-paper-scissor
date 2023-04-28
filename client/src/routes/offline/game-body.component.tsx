import { useContext } from 'react';
import useSound from 'use-sound';

import icons from '../../data';
import iconClick from '../../sounds/game-click.mp3';

import GamePlay from './game-play.component';
import Icon from '../../components/icon/icon.component';

import { GameContext } from '../../contexts/game.context';

import { GameBodyContainer } from '../../styles/game-body.styles';

const GameBody = (): JSX.Element => {
	const [play] = useSound(iconClick, { volume: 0.25 });
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
		// play();
	};

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
