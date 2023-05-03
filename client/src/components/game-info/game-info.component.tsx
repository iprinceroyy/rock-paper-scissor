import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import logo from '../../assets/images/logo.svg';

import { GameInfoContainer, GameLogo, GameScore } from './game-info.styles';

const GameInfo = (): JSX.Element => {
	const { score } = useAppSelector(state => state.scorer);

	return (
		<GameInfoContainer>
			<GameLogo>
				<img src={logo} alt='' />
			</GameLogo>

			<GameScore>
				<span>score</span>
				<span>{score}</span>
			</GameScore>
		</GameInfoContainer>
	);
};

export default GameInfo;
