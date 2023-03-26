import { useEffect, useContext } from 'react';

import { winner } from '../../utils/winner';
import icons from '../../data';

import Icon from '../Icon/iconComponent';

import { ScoreContext } from '../../contexts/scoreContext';
import { GameContext } from '../../contexts/gameContext';

import { GamePlayContainer, PlayerContainer, SecondPlayer, GameResult } from './gamePlayStyles';

const GamePlay = () => {
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
		setTimeout(() => {
			const randVal = 1 + Math.floor(Math.random() * 3);

			setCompChoice(randVal);
			setIsLoading(!isLoading);
		}, 1000);
	}, []);

	const [{ title: secondPlayerTitle = '', image: secondPlayerIcon }] = icons.filter(
		({ id }) => id === +compChoice
	);

	const [{ image }] = icons.filter(({ title }) => title === btnVal);

	const startNewGameHandler = (e: any) => {
		e.target.previousElementSibling.innerText === 'YOU WIN' && setScore(score + 1);

		setIsNewGameStart(!isNewGameStart);
	};

	return (
		<>
			<GamePlayContainer>
				<PlayerContainer>
					<Icon id={1} title={btnVal} image={image} />
					<p>you picked</p>
				</PlayerContainer>

				<PlayerContainer>
					{isLoading ? (
						<Icon id={2} title={secondPlayerTitle} image={secondPlayerIcon} />
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
					<button type='button' onClick={startNewGameHandler}>
						Play Again
					</button>
				)}
			</GameResult>
		</>
	);
};

export default GamePlay;
