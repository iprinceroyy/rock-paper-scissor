import { useContext } from 'react';

import './GameRulesStyles.scss';
import { RulesContext } from '../../contexts/rulesContext';

import imageRules from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

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
