import { useContext } from 'react';

import { ScoreContext } from '../../contexts/score.context';

import './game-info.styles.scss';

const GameInfo = () => {
	const { score } = useContext(ScoreContext);

	return (
		<div className='Game__Info'>
			<p className='Game__Title'>
				<span>rock</span>
				<span>paper</span>
				<span>scissor</span>
			</p>
			<p className='Game__Score'>
				<span>score</span>
				<span>{score}</span>
			</p>
		</div>
	);
};

export default GameInfo;
