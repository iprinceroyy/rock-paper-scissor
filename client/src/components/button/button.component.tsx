import { FC, MouseEventHandler, ReactNode } from 'react';

import { PlayOnline, PlayOffline, PrimaryButton, SecondaryButton } from './button.styles';

type ButtonProps = {
	btnStyle?: string;
	type: 'submit' | 'reset' | 'button' | undefined;
	children: ReactNode;
	handler?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const ButtonType = {
	playOnline: 'play online',
	playOffline: 'play with computer',
};

const Button: FC<ButtonProps> = ({ btnStyle, type, children, handler }) => {
	return (
		<>
			{btnStyle === 'primary' && (
				<PrimaryButton type={type} onClick={handler}>
					<span>{children}</span>
				</PrimaryButton>
			)}

			{btnStyle === 'secondary' && (
				<SecondaryButton type={type} onClick={handler}>
					<span>{children}</span>
				</SecondaryButton>
			)}

			{btnStyle === 'play online' && (
				<PlayOnline type={type} onClick={handler}>
					<span>{children}</span>
				</PlayOnline>
			)}

			{btnStyle === 'play with computer' && (
				<PlayOffline type={type} onClick={handler}>
					<span>{children}</span>
				</PlayOffline>
			)}
		</>
	);
};

export default Button;
