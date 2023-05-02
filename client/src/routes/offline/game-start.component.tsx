import { useContext } from 'react';

import GameInfo from '../../components/game-info/game-info.component';
import GameBody from './game-body.component';
import GameRulesImage from '../../components/game-rules/game-rules.component';

import { RulesContext } from '../../contexts/rules.context';
import GameRulesBtn from '../../components/game-rules-btn/game-rules-btn.component';

const GameStart = (): JSX.Element => {
	const { isClicked, setIsClicked } = useContext(RulesContext);

	const rulesHandler = () => setIsClicked(!isClicked);

	return (
		<div className='Game Game__Container'>
			<GameInfo />
			<GameBody />

			{isClicked ? (
				<GameRulesImage closeHandler={rulesHandler} />
			) : (
				<GameRulesBtn openHandler={rulesHandler} />
			)}
		</div>
	);
};

export default GameStart;
