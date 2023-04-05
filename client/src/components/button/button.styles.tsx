import styled from 'styled-components';

export const BaseButton = styled.button`
	outline: 3px solid transparent;
	border: 2px solid hsl(0, 0%, 100%);
	border-radius: 8px;
	justify-self: center;
	text-align: center;
	letter-spacing: 2px;
	transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
`;

export const PrimaryButton = styled(BaseButton)`
	font-size: 0.9rem;
	padding-block: 0.8rem;
	padding-inline: 2.7rem;
	color: hsl(237, 49%, 15%);
	background-color: hsl(0, 0%, 100%);
`;

export const SecondaryButton = styled(BaseButton)`
	font-size: 1rem;
	padding-block: 0.6rem;
	padding-inline: 2rem;
	color: hsl(0, 0%, 90%);
	background-color: transparent;

	&:hover {
		color: hsl(229, 25%, 31%);
		background-color: hsl(0, 0%, 90%);
	}
`;

export const PlayButton = styled(PrimaryButton)`
	padding-block: 0.6rem;
	padding-inline: 2.7rem;
`;

export const PlayOnline = styled(PrimaryButton)`
	padding-inline: 2rem;
	padding-block: 1rem;
`;

export const PlayOffline = styled(SecondaryButton)`
	padding-inline: 1rem;
	padding-block: 1rem;
`;
