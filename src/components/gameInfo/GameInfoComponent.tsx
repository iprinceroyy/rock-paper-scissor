import './GameInfoStyles.scss';

const GameInfo = () => {
	return (
		<div className='Game__Info'>
			<p className='Game__Title'>
				<span>rock</span>
				<span>paper</span>
				<span>scissor</span>
			</p>
			<p className='Game__Score'>
				<span>score</span>
				<span>12</span>
			</p>
		</div>
	);
};

export default GameInfo;
