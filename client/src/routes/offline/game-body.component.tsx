import useSound from 'use-sound';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import icons from '../../data';
import iconClick from '../../sounds/game-click.mp3';

import GamePlay from './game-play.component';
import Icon from '../../components/icon/icon.component';

import { GameBodyContainer } from '../../styles/game-body.styles';

import {
	setFirstPlayerChose,
	setFirstPlayerTitle,
	setCompChose,
	setIsNewGameStart,
} from '../../redux/players/players.slice';

const GameBody = (): JSX.Element => {
	const [play] = useSound(iconClick, { volume: 0.25 });

	const { firstPlayerChose, isNewGameStart } = useAppSelector(state => state.players);
	const dispatch = useAppDispatch();

	const iconClickHandler = (e: any) => {
		dispatch(setFirstPlayerChose(true));
		dispatch(setFirstPlayerTitle(e.target.closest('#icon-wrapper').value));
		dispatch(setIsNewGameStart(!isNewGameStart));
		dispatch(setCompChose(false));
		play();
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
