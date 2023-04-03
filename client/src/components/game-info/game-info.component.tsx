import { useContext } from 'react';

import { ScoreContext } from '../../contexts/score.context';
import logo from '../../assets/images/logo.svg';

import './game-info.styles.scss';

const GameInfo = () => {
	const { score } = useContext(ScoreContext);

	return (
		<div className='Game__Info'>
			<div className='Game__Logo'>
				<img src={logo} alt='' />
			</div>
			<div className='Game__Score'>
				<span>score</span>
				<span>{score}</span>
			</div>
		</div>
	);
};

export default GameInfo;
