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
	justify-content: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl});`};
	background-repeat: no-repeat;
	background-size: 60% 50%;
	background-position: center;
`;

export const selectColor = (color: string): string => {
	let hs: string = '';

	switch (color) {
		case 'scissors':
			hs = '39 89% 49%';
			break;

		case 'paper':
			hs = '230 71% 52%';
			break;

		case 'rock':
			hs = '349 89% 49%';
			break;
		default:
			break;
	}

	return `hsl(${hs})`;
};

export const Icon = styled.div<BorderColorProps>`
	background-color: white;
	border-width: 10px;
	border-style: solid;
	border-color: ${({ title }) => selectColor(title)};
	border-radius: 50%;
	padding: 1.6rem;
	display: grid;
	place-items: center center;
`;

export const ThirdIcon = styled(Icon)`
	grid-area: 2 / 1 / span 2 / span 2;
	justify-self: center;
`;
