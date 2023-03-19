import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconScissors from '../../assets/images/icon-scissors.svg';

import './GameBodyStyles.scss';

const GameBody = () => {
	return (
		<div className='Game__Body'>
			<div className='Icon'>
				<img src={iconPaper} alt='paper' />
			</div>
			<div className='Icon'>
				<img src={iconScissors} alt='scissors' />
			</div>
			<div className='Icon ThirdIcon'>
				<img src={iconRock} alt='lizard' />
			</div>
		</div>
	);
};

export default GameBody;
