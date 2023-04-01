import { useContext } from 'react';

import GameInfo from '../game-info/game-info.component';
import GameBody from '../game-body/game-body.component';
import GameRules, { GameRulesImage } from '../game-rules/game-rules.component';

import { RulesContext } from '../../contexts/rules.context';

const GameStart = () => {
	const { isClicked } = useContext(RulesContext);

	return (
		<>
			{isClicked ? (
				<GameRulesImage />
			) : (
				<div className='Game Game__Container'>
					<GameInfo />
					<GameBody />
					<GameRules />
				</div>
			)}
		</>
	);
};

export default GameStart;
