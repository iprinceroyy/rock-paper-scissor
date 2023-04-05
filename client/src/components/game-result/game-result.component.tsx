import { FC, useContext, useEffect, useState } from 'react';

import { GameContext } from '../../contexts/game.context';
import { ScoreContext } from '../../contexts/score.context';
import { winner } from '../../utils/winner';

import Button from '../button/button.component';
import { GameResultContainer } from './game-result.styles';

type GameResultProps = {
	player1: string;
	player2: string;
};

const GameResult: FC<GameResultProps> = ({ player1, player2 }) => {
	const { score, setScore } = useContext(ScoreContext);
	const { isNewGameStart, setIsNewGameStart, compChose } = useContext(GameContext);
	const [winnerText, setWinnerText] = useState('');

	useEffect(() => {
		const winnerRes = winner(player1, player2);
		winnerRes === player1 && setWinnerText('you win');
		winnerRes === player2 && setWinnerText('you loss');
		winnerRes === 'draw' && setWinnerText('draw');
	}, [compChose]);

	useEffect(() => {
		winnerText === 'you win' && setScore(score + 1);
		winnerText === 'you loss' && score > 0 && setScore(score - 1);
		winnerText === 'draw' && setScore(score + 0);
	}, [winnerText]);

	const startNewGameHandler = () => setIsNewGameStart(!isNewGameStart);

	return (
		<GameResultContainer>
			<p>{winnerText}</p>

			<Button type={'button'} children={'Play Again'} handler={startNewGameHandler} />
		</GameResultContainer>
	);
};

export default GameResult;
