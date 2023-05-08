import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { increment, decrement, updateWinner } from '../../redux/score/scorer.slice';
import { setIsNewGameStart } from '../../redux/players/players.slice';

import { winner } from '../../utils/winner';
import Button from '../../components/button/button.component';

import { GameResultContainer } from '../../styles/game-result.styles';

const GameResult = (): JSX.Element => {
	const { isNewGameStart, compChose, firstPlayerTitle, compChoiceTitle } = useAppSelector(
		state => state.players
	);
	const [winnerText, setWinnerText] = useState<string>('');

	const dispatch = useAppDispatch();

	useEffect(() => {
		const winnerRes = winner(firstPlayerTitle, compChoiceTitle);

		winnerRes === firstPlayerTitle && setWinnerText('you win');
		winnerRes === compChoiceTitle && setWinnerText('you loss');
		winnerRes === 'draw' && setWinnerText('draw');
	}, [compChose]);

	useEffect(() => {
		winnerText === 'you win'
			? dispatch(updateWinner('you'))
			: winnerText === 'you loss'
			? dispatch(updateWinner('opponent'))
			: dispatch(updateWinner('draw'));

		winnerText === 'you win' && dispatch(increment());
		winnerText === 'you loss' && dispatch(decrement());
	}, [winnerText]);

	const startNewGameHandler = () => {
		dispatch(setIsNewGameStart(!isNewGameStart));
	};

	return (
		<GameResultContainer>
			<p>{winnerText}</p>

			<Button
				type={'button'}
				btnStyle='play again'
				children={'Play Again'}
				handler={startNewGameHandler}
			/>
		</GameResultContainer>
	);
};

export default GameResult;
