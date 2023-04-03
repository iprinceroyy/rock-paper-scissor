import { useContext } from 'react';

import { RulesContext } from '../../contexts/rules.context';

import imageRules from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import Button from '../button/button.component';

import './game-rules.styles.scss';

const GameRules = () => {
	const { isClicked, setIsClicked } = useContext(RulesContext);

	const rulesHandler = () => setIsClicked(!isClicked);

	return (
		<>
			<Button type='button' children={'rules'} handler={rulesHandler} btnStyle={'secondary'} />
		</>
	);
};

export const GameRulesImage = () => {
	const { isClicked, setIsClicked } = useContext(RulesContext);

	const crossHandler = () => setIsClicked(!isClicked);

	return (
		<div className='Rules__Image'>
			<p>rules</p>
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
