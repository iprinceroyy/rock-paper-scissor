import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

import logo from '../../assets/images/logo.svg';

import { GameInfoContainer, GameLogo, GameScore } from './game-info.styles';

const GameInfo = (): JSX.Element => {
	const { score } = useSelector((state: RootState) => state.score);

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
