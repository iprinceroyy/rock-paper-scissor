import { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../../redux/store';

import icons from '../../data';

import Icon from '../../components/icon/icon.component';
import GameResult from './game-result.component';

import { GameContext } from '../../contexts/game.context';

import {
	GamePlayContainer,
	PlayerContainer,
	PlayerIdentity,
	SecondPlayer,
} from '../../styles/game-play.styles';

const GamePlay = (): JSX.Element => {
	const [compChoice, setCompChoice] = useState<number>(1);
	const { winner } = useSelector((state: RootState) => state.score);
	const { firstPlayerTitle, compChose, setCompChose } = useContext(GameContext);

	useEffect(() => {
		const id = setTimeout(() => {
			const randVal = 1 + Math.floor(Math.random() * 3);

			setCompChoice(randVal);
			setCompChose(!compChose);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	const [{ title: compChoiceTitle = '', image: compChoiceIcon }] = icons.filter(
		({ id }) => id === +compChoice
	);

	const [{ image: firstPlayerIcon }] = icons.filter(({ title }) => title === firstPlayerTitle);

	return (
		<GamePlayContainer>
			<PlayerContainer spaceBetween={compChose}>
				<Icon
					key={11}
					title={firstPlayerTitle}
					image={firstPlayerIcon}
					large={true}
					won={winner === 'you'}
				/>

				{compChose ? (
					<Icon
						key={22}
						title={compChoiceTitle}
						image={compChoiceIcon}
						large={true}
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

			{compChose && <GameResult player1={firstPlayerTitle} player2={compChoiceTitle} />}
		</GamePlayContainer>
	);
};

export default GamePlay;
