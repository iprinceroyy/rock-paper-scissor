import { useContext } from 'react';

import GameInfo from '../../components/game-info/game-info.component';
import OnlineGameBody from './game-body.component';
import GameRules, { GameRulesImage } from '../../components/game-rules/game-rules.component';

import { RulesContext } from '../../contexts/rules.context';
import { SocketContext } from '../../contexts/socket.context';

const OnlineGameStart = () => {
	const { isClicked } = useContext(RulesContext);
	const { score } = useContext(SocketContext);

	return (
		<>
			{isClicked ? (
				<GameRulesImage />
			) : (
				<div className='Game Game__Container'>
					<GameInfo score={score} />
					<OnlineGameBody />
					<GameRules />
				</div>
			)}
		</>
	);
};

export default OnlineGameStart;
