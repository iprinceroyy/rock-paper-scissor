import { MouseEventHandler } from 'react';

import imageRules from '../../assets/images/image-rules-bonus.svg';
import closeIcon from '../../assets/images/icon-close.svg';

import { RulesContainer, RulesCloseContainer, RulesImageContainer } from './game-rules.styles';

type GameRulesImageProps = {
	closeHandler: MouseEventHandler<HTMLImageElement>;
};

const GameRulesImage = ({ closeHandler }: GameRulesImageProps): JSX.Element => {
	return (
		<RulesContainer>
			<p>rules</p>
			<RulesImageContainer>
				<img src={imageRules} alt='' />
			</RulesImageContainer>

			<RulesCloseContainer>
				<img src={closeIcon} onClick={closeHandler} alt='close the rules' />
			</RulesCloseContainer>
		</RulesContainer>
	);
};

export default GameRulesImage;
