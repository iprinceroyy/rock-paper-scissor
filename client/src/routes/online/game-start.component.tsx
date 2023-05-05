import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { socket } from './room.component';
import GameInfo from '../../components/game-info/game-info.component';
import OnlineGameBody from './game-body.component';
import GameRulesImage from '../../components/game-rules/game-rules.component';
import GameRulesBtn from '../../components/game-rules-btn/game-rules-btn.component';

import { setShowRules } from '../../redux/rules/rules.slice';
import { setGameRestartMessage, setGameStatus } from '../../redux/players/online-players.slice';

const OnlineGameStart = (): JSX.Element => {
	const { score, resultOut } = useAppSelector(state => state.onlineScorer);
	const { showRules } = useAppSelector(state => state.rules);
	const { gameStatus, gameRestartMessage, gamePlay } = useAppSelector(state => state.onlinePlayers);

	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('status', message => {
			dispatch(setGameStatus(message));
		});

		dispatch(setGameRestartMessage(''));
	}, []);

	const rulesHandler = () => dispatch(setShowRules(!showRules));

	return (
		<div className='Game Game__Container'>
			<GameInfo score={score} />
			<OnlineGameBody />

			<p>{!resultOut && gameStatus}</p>
			<p>{gamePlay && gameRestartMessage}</p>

			{showRules ? (
				<GameRulesImage closeHandler={rulesHandler} />
			) : (
				<GameRulesBtn openHandler={rulesHandler} />
			)}
		</div>
	);
};

export default OnlineGameStart;
