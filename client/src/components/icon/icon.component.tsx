import { MouseEventHandler } from 'react';
import { IconContainer, WinnerIconContainer, IconWrapper } from './icon.styles';

type IconProps = {
	title: string;
	image: string;
	bigSize?: boolean;
	won?: boolean;
	handler?: MouseEventHandler<HTMLButtonElement>;
};

const Icon = ({ title, image, bigSize, won, handler }: IconProps): JSX.Element => {
	return (
		<>
			{won ? (
				<WinnerIconContainer title={title} bigSize={bigSize}>
					<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
						<img src={image} alt={title} />
					</IconWrapper>
				</WinnerIconContainer>
			) : (
				<IconContainer title={title} bigSize={bigSize}>
					<IconWrapper type='button' id='icon-wrapper' value={title} onClick={handler}>
						<img src={image} alt={title} />
					</IconWrapper>
				</IconContainer>
			)}
		</>
	);
};

export default Icon;
