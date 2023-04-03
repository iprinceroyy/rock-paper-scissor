import { useEffect, useContext, useState } from 'react';

import { winner } from '../../utils/winner';
import icons from '../../data';

import Icon from '../icon/icon.component';

import { ScoreContext } from '../../contexts/score.context';
import { GameContext } from '../../contexts/game.context';

import { GamePlayContainer, PlayerContainer, SecondPlayer, GameResult } from './game-play.styles';
import Button from '../button/button.component';

const GamePlay = () => {
	const [winnerText, setWinnerText] = useState('');
	const {
		btnVal,
		compChoice,
		setCompChoice,
		isLoading,
		setIsLoading,
		isNewGameStart,
		setIsNewGameStart,
	} = useContext(GameContext);

	const { score, setScore } = useContext(ScoreContext);

	useEffect(() => {
		const id = setTimeout(() => {
			const randVal = 1 + Math.floor(Math.random() * 3);

			setCompChoice(randVal);
			setIsLoading(!isLoading);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	const [{ title: secondPlayerTitle = '', image: secondPlayerIcon }] = icons.filter(
		({ id }) => id === +compChoice
	);

	const [{ image }] = icons.filter(({ title }) => title === btnVal);

	const startNewGameHandler = (e: any) => {
		winnerText === 'YOU WIN' && setScore(score + 1);
		winnerText === 'YOU LOSS' && setScore(score - 1);
		winnerText === 'DRAW' && setScore(score);

		setIsNewGameStart(!isNewGameStart);
	};

	return (
		<>
			<GamePlayContainer>
				<PlayerContainer>
					<Icon key={1} title={btnVal} image={image} />
					<p>you picked</p>
				</PlayerContainer>

				<PlayerContainer>
					{isLoading ? (
						<Icon key={2} title={secondPlayerTitle} image={secondPlayerIcon} />
					) : (
						<SecondPlayer></SecondPlayer>
					)}
					<p>the house picked</p>
				</PlayerContainer>
			</GamePlayContainer>
			<GameResult>
				{isLoading && (
					<p>
						{winner(btnVal, secondPlayerTitle) === btnVal
							? 'You win'
							: winner(btnVal, secondPlayerTitle) === secondPlayerTitle
							? 'You loss'
							: 'draw'}
					</p>
				)}
				{isLoading && (
					<Button
						type={'button'}
						children={'Play Again'}
						handler={startNewGameHandler}
						btnStyle={'primary'}
					/>
				)}
			</GameResult>
		</>
	);
};

export default GamePlay;
