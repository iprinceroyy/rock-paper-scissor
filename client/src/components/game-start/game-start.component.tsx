import { useContext } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import GameInfo from '../game-info/game-info.component';
import GameBody from '../game-body/game-body.component';
import GameRules, { GameRulesImage } from '../game-rules/game-rules.component';

import { RulesContext } from '../../contexts/rules.context';
import { ScoreContext } from '../../contexts/score.context';

const GameStart = (): JSX.Element => {
	const { isClicked } = useContext(RulesContext);
	const { score } = useContext(ScoreContext);

	return (
		<div className='Game Game__Container'>
			<GameInfo score={score} />
			<GameBody />
			<div>
				<Link to='rule'>
					<GameRules />
				</Link>

				<Outlet />
			</div>
		</div>
	);
};

export default GameStart;
