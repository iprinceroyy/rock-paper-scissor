import styled from 'styled-components';

type BackgroundImageProps = {
	imageUrl: string;
};

type BorderColorProps = {
	title: string;
};

export const GameBodyContainer = styled.div<BackgroundImageProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem 2.2rem;
	background-image: ${({ imageUrl }) => `url(${imageUrl});`};
	background-repeat: no-repeat;
	background-size: 60% 50%;
	background-position: center;

	@media (min-width: 1024px) {
		padding-inline: 2rem;
	}
`;

const selectColor = (color: string): string => {
	let hsl1: string = '';
	let hsl2: string = '';

	switch (color) {
		case 'scissors':
			hsl1 = '39 89% 49%';
			hsl2 = '40 84% 53%';
			break;

		case 'paper':
			hsl1 = '230 89% 62%';
			hsl2 = '230 89% 65%';
			break;

		case 'rock':
			hsl1 = '349 71% 52%';
			hsl2 = '349 70% 56%';
			break;

		default:
			break;
	}

	return `hsl(${hsl1}), hsl(${hsl2})`;
};

const selectBoxShadow = (color: string): string => {
	let hsl: string = '';

	switch (color) {
		case 'scissors':
			hsl = '35 80% 35%';
			break;

		case 'paper':
			hsl = '210 89% 30%';
			break;

		case 'rock':
			hsl = '345 71% 35%';
			break;

		default:
			break;
	}

	return `hsl(${hsl})`;
};

export const Icon = styled.div<BorderColorProps>`
	width: 7.5rem;
	height: 7.5rem;
	justify-self: ${({ title }) => title === 'scissors' && 'flex-end'};
	display: grid;
	place-items: center center;
	border: none;
	border-radius: 50%;
	background-image: linear-gradient(${({ title }) => selectColor(title)});
	box-shadow: 0 7px 0 -1px ${({ title }) => selectBoxShadow(title)};
`;

export const ThirdIcon = styled(Icon)`
	grid-area: 2 / 1 / span 2 / span 2;
	justify-self: center;
`;

export const IconWrapper = styled.div`
	width: 75%;
	height: 75%;
	display: grid;
	place-items: center center;
	border-radius: 50%;
	background-color: white;
	box-shadow: inset 0 6px rgba(199, 199, 199, 0.7);
`;
