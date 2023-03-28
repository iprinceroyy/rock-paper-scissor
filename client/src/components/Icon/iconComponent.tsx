import { IconContainer, IconWrapper } from './iconStyles';
import { FC } from 'react';

type IconProps = {
	id: number;
	title: string;
	image: string;
	handler?: any;
};

const Icon: FC<IconProps> = ({ id, title, image, handler }) => {
	return (
		<IconContainer title={title} key={id}>
			<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
				<img src={image} alt={title} />
			</IconWrapper>
		</IconContainer>
	);
};

export default Icon;
