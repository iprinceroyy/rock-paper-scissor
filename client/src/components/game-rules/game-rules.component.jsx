import { useContext } from 'react';

import { RulesContext } from '../../contexts/rules.context';

import imageRules from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

import './game-rules.styles.scss';

const GameRules = () => {
	const { isClicked, setIsClicked } = useContext(RulesContext);

	const rulesHandler = () => setIsClicked(!isClicked);

	return (
		<div className='Game__Rules'>
			<span onClick={rulesHandler}>rules</span>
		</div>
	);
};

export const GameRulesImage = () => {
	const { isClicked, setIsClicked } = useContext(RulesContext);

	const crossHandler = () => setIsClicked(!isClicked);

	return (
		<div className='Rules__Image'>
			<span>rules</span>
			<div>
				<img src={imageRules} alt='' />
			</div>
			<div>
				<img src={closeIcon} onClick={crossHandler} alt='close the rules' />
			</div>
		</div>
	);
};

export default GameRules;
