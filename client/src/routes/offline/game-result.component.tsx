import { useContext, useEffect, useState } from 'react';

import { GameContext } from '../../contexts/game.context';
import { ScoreContext } from '../../contexts/score.context';
import { winner } from '../../utils/winner';

import Button from '../../components/button/button.component';
import { GameResultContainer } from '../../styles/game-result.styles';

type GameResultProps = {
	readonly player1: string;
	readonly player2: string;
};

const GameResult = ({ player1, player2 }: GameResultProps): JSX.Element => {
	const { score, setScore, setDidWin } = useContext(ScoreContext);
	const { isNewGameStart, setIsNewGameStart, compChose, setFirstPlayerChose, firstPlayerChose } =
		useContext(GameContext);
	const [winnerText, setWinnerText] = useState<string>('');

	useEffect(() => {
		const winnerRes = winner(player1, player2);
		winnerRes === player1 && setWinnerText('you win');
		winnerRes === player2 && setWinnerText('you loss');
		winnerRes === 'draw' && setWinnerText('draw');
	}, [compChose]);

	useEffect(() => {
		winnerText === 'you win' && setDidWin(true);
		winnerText === 'you win' && setScore(score + 1);
		winnerText === 'you loss' && score > 0 && setScore(score - 1);
		winnerText === 'draw' && setScore(score + 0);
	}, [winnerText]);

	const startNewGameHandler = () => {
		setIsNewGameStart(!isNewGameStart);
		setDidWin(false);
	};

	return (
		<GameResultContainer>
			<p>{winnerText}</p>

			<Button
				type={'button'}
				btnStyle='primary'
				children={'Play Again'}
				handler={startNewGameHandler}
			/>
		</GameResultContainer>
	);
};

export default GameResult;
