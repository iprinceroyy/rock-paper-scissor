import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { socket } from './room.component';
import GameInfo from '../../components/game-info/game-info.component';
import OnlineGameBody from './game-body.component';
import GameRulesImage from '../../components/game-rules/game-rules.component';
import GameRulesBtn from '../../components/game-rules-btn/game-rules-btn.component';

import { setShowRules } from '../../redux/rules/rules.slice';
import {
	setOpponentPickedMessage,
	setOpponentRestartedMessage,
} from '../../redux/status/opponent-status.slice';

const OnlineGameStart = (): JSX.Element => {
	const { score, resultOut } = useAppSelector(state => state.onlineScorer);
	const { showRules } = useAppSelector(state => state.rules);
	const { gamePlay } = useAppSelector(state => state.onlinePlayers);
	const { opponentPickedMessage, opponentRestartedMessage } = useAppSelector(
		state => state.opponentStatus
	);
	const [leftMessage, setLeftMessage] = useState('');

	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('status', message => {
			dispatch(setOpponentPickedMessage(message));
		});

		socket.on('disconnected', message => {
			setLeftMessage(message);
		});

		dispatch(setOpponentRestartedMessage(''));

		return () => {
			socket.off('status');
		};
	}, []);

	const rulesHandler = () => dispatch(setShowRules(!showRules));

	return (
		<div className='Game Game__Container'>
			<GameInfo score={score} />
			<OnlineGameBody />

			{!resultOut && <p>{opponentPickedMessage}</p>}
			{gamePlay && !leftMessage && <p>{opponentRestartedMessage}</p>}
			{leftMessage && <p>{leftMessage}</p>}

			{showRules ? (
				<GameRulesImage closeHandler={rulesHandler} />
			) : (
				<GameRulesBtn openHandler={rulesHandler} />
			)}
		</div>
	);
};

export default OnlineGameStart;
