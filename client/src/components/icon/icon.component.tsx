import { MouseEventHandler } from 'react';
import { IconContainer, IconWrapper } from './icon.styles';

type IconProps = {
	title: string;
	image: string;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = ({ title, image, handler }: IconProps): JSX.Element => {
	return (
		<IconContainer title={title}>
			<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
				<img src={image} alt={title} />
			</IconWrapper>
		</IconContainer>
	);
};

export default Icon;
