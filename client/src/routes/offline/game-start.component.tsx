import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import GameInfo from '../../components/game-info/game-info.component';
import GameBody from './game-body.component';
import GameRulesImage from '../../components/game-rules/game-rules.component';
import GameRulesBtn from '../../components/game-rules-btn/game-rules-btn.component';

import { setShowRules } from '../../redux/rules/rules.slice';

const GameStart = (): JSX.Element => {
	const { score } = useAppSelector(state => state.scorer);
	const { showRules } = useAppSelector(state => state.rules);

	const dispatch = useAppDispatch();

	const rulesHandler = () => dispatch(setShowRules(!showRules));

	return (
		<div className='Game Game__Container'>
			<GameInfo score={score} />
			<GameBody />

			{showRules ? (
				<GameRulesImage closeHandler={rulesHandler} />
			) : (
				<GameRulesBtn openHandler={rulesHandler} />
			)}
		</div>
	);
};

export default GameStart;
