import { FC, MouseEventHandler, ReactNode } from 'react';

import { PrimaryButton, SecondaryButton } from './button.styles';

type ButtonProps = {
	btnStyle?: string;
	type: 'submit' | 'reset' | 'button' | undefined;
	children: ReactNode;
	handler: MouseEventHandler<HTMLButtonElement> | undefined;
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
		</>
	);
};

export default Button;
