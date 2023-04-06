import { useEffect, useContext, useState } from 'react';

import icons from '../../data';

import Icon from '../icon/icon.component';
import GameResult from '../game-result/game-result.component';

import { GameContext } from '../../contexts/game.context';

import { GamePlayContainer, PlayerContainer, SecondPlayer } from './game-play.styles';

const GamePlay = (): JSX.Element => {
	const [compChoice, setCompChoice] = useState<number>(1);

	const { firstPlayerTitle, compChose, setCompChose } = useContext(GameContext);

	useEffect(() => {
		const id = setTimeout(() => {
			const randVal = 1 + Math.floor(Math.random() * 3);
			console.log('random', randVal);

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
		<>
			<GamePlayContainer>
				<PlayerContainer>
					<Icon key={1} title={firstPlayerTitle} image={firstPlayerIcon} />
					<p>you picked</p>
				</PlayerContainer>

				<PlayerContainer>
					{compChose ? (
						<Icon key={2} title={compChoiceTitle} image={compChoiceIcon} />
					) : (
						<SecondPlayer></SecondPlayer>
					)}
					<p>the house picked</p>
				</PlayerContainer>
			</GamePlayContainer>
			{compChose && <GameResult player1={firstPlayerTitle} player2={compChoiceTitle} />}
		</>
	);
};

export default GamePlay;
