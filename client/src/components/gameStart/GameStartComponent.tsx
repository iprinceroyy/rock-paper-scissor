import { useContext } from 'react';

import GameInfo from '../gameInfo/GameInfoComponent';
import GameBody from '../gameBody/GameBodyComponent';
import GameRules, { GameRulesImage } from '../gameRules/GameRulesComponent';

import { RulesContext } from '../../contexts/rulesContext';

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
