import { MouseEventHandler } from 'react';
import { IconContainer, IconWrapper, LargeIconContainer } from './icon.styles';

type IconProps = {
	iconId?: number;
	title: string;
	image: string;
	large?: boolean;
	won?: boolean;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = (props: IconProps): JSX.Element => {
	const { iconId, title, image, large, won, handler } = props;

	return (
		<>
			{large ? (
				<LargeIconContainer iconId={iconId} title={title} won={won}>
					<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
						<img src={image} alt={title} />
					</IconWrapper>
				</LargeIconContainer>
			) : (
				<IconContainer iconId={iconId} title={title} won={won}>
					<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
						<img src={image} alt={title} />
					</IconWrapper>
				</IconContainer>
			)}
		</>
	);
};

export default Icon;
