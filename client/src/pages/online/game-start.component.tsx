import { useContext } from 'react';

import GameInfo from '../../components/game-info/game-info.component';
import OnlineGameBody from './game-body.component';
import GameRules, { GameRulesImage } from '../../components/game-rules/game-rules.component';

import { RulesContext } from '../../contexts/rules.context';

const OnlineGameStart = () => {
	const { isClicked } = useContext(RulesContext);

	return (
		<>
			{isClicked ? (
				<GameRulesImage />
			) : (
				<div className='Game Game__Container'>
					<GameInfo />
					<OnlineGameBody />
					<GameRules />
				</div>
			)}
		</>
	);
};

export default OnlineGameStart;
