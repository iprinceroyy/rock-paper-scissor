import logo from '../../assets/images/logo-bonus.svg';

import { GameInfoContainer, GameLogo, GameScore } from './game-info.styles';

type GameInfoProps = {
	score: number;
};

const GameInfo = ({ score }: GameInfoProps): JSX.Element => {
	return (
		<GameInfoContainer>
			<GameLogo to='#'>
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
