import logo from '../../assets/images/logo.svg';

import './game-info.styles.scss';

type GameInfoProps = {
	readonly score: number;
};

const GameInfo = ({ score }: GameInfoProps): JSX.Element => {
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
