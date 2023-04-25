import { MouseEventHandler } from 'react';

import imageRules from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

import './game-rules.styles.scss';

type GameRulesImageProps = {
	closeHandler: MouseEventHandler<HTMLImageElement>;
};

const GameRulesImage = ({ closeHandler }: GameRulesImageProps): JSX.Element => {
	return (
		<div className='Rules Rules__Container'>
			<p>rules</p>
			<div className='Rules__Image__Container'>
				<img src={imageRules} alt='' />
			</div>
			<div className='Rules__Close'>
				<img src={closeIcon} onClick={closeHandler} alt='close the rules' />
			</div>
		</div>
	);
};

export default GameRulesImage;
