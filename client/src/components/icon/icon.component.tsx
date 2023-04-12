import { MouseEventHandler } from 'react';
import { IconContainer, IconWrapper } from './icon.styles';

type IconProps = {
	title: string;
	image: string;
	bigSize?: boolean;
	won?: boolean;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = ({ title, image, bigSize, won, handler }: IconProps): JSX.Element => {
	return (
		<IconContainer title={title} bigSize={bigSize} won={won}>
			<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
				<img src={image} alt={title} />
			</IconWrapper>
		</IconContainer>
	);
};

export default Icon;
