import { useEffect, useContext } from 'react';

import Icon from '../Icon/iconComponent';

import { GamePlayContainer, PlayerContainer, SecondPlayer } from './gamePlayStyles';
import { GameContext } from '../../contexts/gameContext';

import icons from '../../data';

const GamePlay = () => {
	const { btnVal, compChoice, setCompChoice, isLoading, setIsLoading } = useContext(GameContext);

	useEffect(() => {
		// setTimeout(() => {

		// }, 2000);

		const randVal = 1 + Math.floor(Math.random() * 3);

		setCompChoice(randVal);
		setIsLoading(!isLoading);
	}, []);

	const [{ title: secondPlayerTitle = '', image: secondPlayer }] = icons.filter(
		({ id }) => id === +compChoice
	);

	const [{ image }] = icons.filter(({ title }) => title === btnVal);

	return (
		<GamePlayContainer>
			<PlayerContainer>
				<Icon id={1} title={btnVal} image={image} />
				<p>you picked</p>
			</PlayerContainer>

			<PlayerContainer>
				{isLoading ? (
					<Icon id={2} title={secondPlayerTitle} image={secondPlayer} />
				) : (
					<SecondPlayer></SecondPlayer>
				)}
				<p>the house picked</p>
			</PlayerContainer>
		</GamePlayContainer>
	);
};

export default GamePlay;
