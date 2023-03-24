import { useEffect, useContext } from 'react';

import { GamePlayContainer, PlayerContainer, SecondPlayer } from './gamePlayStyles';
import { GameContext } from '../../contexts/gameContext';
import Icon from '../Icon/iconComponent';

import icons from '../../data';

const GamePlay = () => {
	const { btnVal, compChoice, setCompChoice } = useContext(GameContext);

	useEffect(() => {
		const randVal = Math.floor(Math.random() * 4);

		setCompChoice(randVal);
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
				{compChoice ? (
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
