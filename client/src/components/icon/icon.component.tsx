import { MouseEventHandler } from 'react';
import { IconContainer, IconWrapper } from './icon.styles';

type IconProps = {
	iconId?: number;
	title: string;
	image: string;
	bigSize?: boolean;
	won?: boolean;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = (props: IconProps): JSX.Element => {
	const { iconId, title, image, bigSize, won, handler } = props;

	return (
		<IconContainer iconId={iconId} title={title} bigSize={bigSize} won={won}>
			<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
				<img src={image} alt={title} />
			</IconWrapper>
		</IconContainer>
	);
};

export default Icon;
