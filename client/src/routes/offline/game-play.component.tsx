import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import icons from '../../data';

import Icon from '../../components/icon/icon.component';
import GameResult from './game-result.component';

import { setCompChose, setCompChoiceTitle } from '../../redux/players/players.slice';

import {
	GamePlayContainer,
	PlayerContainer,
	PlayerIdentity,
	SecondPlayer,
} from '../../styles/game-play.styles';

const GamePlay = (): JSX.Element => {
	const { firstPlayerTitle, compChose, compChoiceTitle } = useAppSelector(state => state.players);
	const { winner } = useAppSelector(state => state.scorer);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const id = setTimeout(() => {
			const randVal = 1 + Math.floor(Math.random() * 5);
			const [matchedData] = icons.filter(({ id }) => id === randVal);

			dispatch(setCompChoiceTitle(matchedData.title));
			dispatch(setCompChose(!compChose));
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	const [firstPlayerData] = icons.filter(({ title }) => title === firstPlayerTitle);
	const firstPlayerIcon = firstPlayerData?.image;

	const [compData] = icons.filter(({ title }) => title === compChoiceTitle);
	const compChoiceIcon = compData?.image;

	return (
		<GamePlayContainer>
			<PlayerContainer spaceBetween={compChose}>
				<Icon
					key={11}
					title={firstPlayerTitle}
					image={firstPlayerIcon}
					customSize={true}
					won={winner === 'you'}
				/>

				{compChose ? (
					<Icon
						key={22}
						title={compChoiceTitle}
						image={compChoiceIcon}
						customSize={true}
						won={winner === 'opponent'}
					/>
				) : (
					<SecondPlayer className='empty' large={true}></SecondPlayer>
				)}
			</PlayerContainer>

			<PlayerIdentity>
				<p>you picked</p>
				<p>the house picked</p>
			</PlayerIdentity>

			{compChose && <GameResult />}
		</GamePlayContainer>
	);
};

export default GamePlay;
