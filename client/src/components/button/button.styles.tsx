import styled from 'styled-components';

export const BaseButton = styled.button`
	position: relative;
	outline: 3px solid transparent;
	border: 2px solid hsl(0, 0%, 100%);
	border-radius: 8px;
	justify-self: center;
	text-align: center;
	letter-spacing: 2px;
	padding-block: 0.6rem;
	padding-inline: 2.2rem;
	transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
`;

export const PrimaryButton = styled(BaseButton)`
	font-size: 1rem;
	color: hsl(237, 49%, 15%);
	font-weight: 700;
	background-color: hsl(0, 0%, 100%);
`;

export const SecondaryButton = styled(BaseButton)`
	font-size: 1rem;
	color: hsl(0, 0%, 90%);
	background-color: transparent;

	&:hover {
		color: hsl(229, 25%, 31%);
		background-color: hsl(0, 0%, 90%);
	}
`;
