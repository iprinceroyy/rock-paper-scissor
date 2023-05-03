import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import logo from '../../assets/images/logo.svg';

import { GameInfoContainer, GameLogo, GameScore } from './game-info.styles';

type GameInfoProps = {
	score: number;
};

const GameInfo = ({ score }: GameInfoProps): JSX.Element => {
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
