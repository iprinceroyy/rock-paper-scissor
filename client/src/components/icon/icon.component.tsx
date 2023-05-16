import { MouseEventHandler } from 'react';
import { IconContainer, IconButton } from './icon.styles';

type IconProps = {
	iconId?: number;
	title: string;
	image: string;
	won?: boolean;
	allow?: boolean;
	customSize?: boolean;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = (props: IconProps): JSX.Element => {
	const { iconId, title, image, won, allow, customSize, handler } = props;

	return (
		<IconContainer $iconId={iconId} $title={title} $won={won} $size={customSize}>
			<IconButton type='button' id='icon-wrapper' value={title} onClick={handler} disabled={allow}>
				<img src={image} alt={title} />
			</IconButton>
		</IconContainer>
	);
};

export default Icon;
