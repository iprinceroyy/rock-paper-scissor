import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { increment, decrement, updateWinner } from '../../redux/score/scorer.slice';

import { GameContext } from '../../contexts/game.context';
import { winner } from '../../utils/winner';
import Button from '../../components/button/button.component';

import { GameResultContainer } from '../../styles/game-result.styles';

import { setIsNewGameStart } from '../../redux/players/players.slice';
import { useAppSelector } from '../../redux/hooks';

type GameResultProps = {
	readonly player1: string;
	readonly player2: string;
};

const GameResult = (): JSX.Element => {
	const { isNewGameStart, compChose, firstPlayerTitle, compChoiceTitle } = useAppSelector(
		state => state.players
	);
	const dispatch = useDispatch();

	const [winnerText, setWinnerText] = useState<string>('');

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
				btnStyle='primary'
				children={'Play Again'}
				handler={startNewGameHandler}
			/>
		</GameResultContainer>
	);
};

export default GameResult;
