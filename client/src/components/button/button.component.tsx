import { MouseEventHandler, ReactNode } from 'react';

import {
	PlayOnline,
	PlayOffline,
	PrimaryButton,
	SecondaryButton,
	PlayButton,
} from './button.styles';

type ButtonProps = {
	readonly btnStyle?: string;
	readonly type: 'submit' | 'reset' | 'button';
	readonly children: ReactNode;
	readonly handler?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ btnStyle, type, children, handler }: ButtonProps): JSX.Element => {
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

			{btnStyle === 'play again' && (
				<PlayButton type={type} onClick={handler}>
					<span>{children}</span>
				</PlayButton>
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
