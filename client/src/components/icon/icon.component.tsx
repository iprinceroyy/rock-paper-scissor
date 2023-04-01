import { IconContainer, IconWrapper } from './icon.styles';
import { FC } from 'react';

type IconProps = {
	key: number | string;
	title: string;
	image: string;
	handler?: any;
};

const Icon: FC<IconProps> = ({ title, image, handler }) => {
	return (
		<IconContainer title={title}>
			<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
				<img src={image} alt={title} />
			</IconWrapper>
		</IconContainer>
	);
};

export default Icon;
