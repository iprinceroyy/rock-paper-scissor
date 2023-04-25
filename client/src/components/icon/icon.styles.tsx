import styled from 'styled-components';

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

type BorderColorProps = {
	$iconId?: number;
	$title: string;
	$bigSize?: boolean;
	$won?: boolean;
};

export const IconContainer = styled.div<BorderColorProps>`
	width: min(34vw, 400px);
	height: min(34vw, 400px);
	justify-self: ${({ $iconId }) => ($iconId === 2 ? 'flex-end' : $iconId === 3 && 'center')};
	display: grid;
	place-items: center center;
	border: none;
	border-radius: 50%;
	background-image: linear-gradient(${({ $title }) => selectColor($title)});
	box-shadow: ${({ $won, $title }) =>
		$won
			? `0 0 0 1.2rem rgba(255, 255, 255, 0.03), 0 0 0 3rem rgba(255, 255, 255, 0.02),
		0 0 0 5.3rem rgba(255, 255, 255, 0.015), 0 7px 0 -1px ${selectBoxShadow($title)}`
			: `
		0 7px 0 -1px ${selectBoxShadow($title)}`};
	grid-area: ${({ $title }) => $title === 'rock' && `2 / 1 / span 2 / span 2`};

	@media (min-width: 720px) {
		width: 9rem;
		height: 9rem;

		box-shadow: ${({ $won, $title }) =>
			$won
				? `0 0 0 50px rgba(255, 255, 255, 0.03), 0 0 0 100px rgba(255, 255, 255, 0.01),
		0 0 0 150px rgba(255, 255, 255, 0.01), 0 7px 0 -1px ${selectBoxShadow($title)}`
				: `
		0 7px 0 -1px ${selectBoxShadow($title)}`};
	}
`;

export const LargeIconContainer = styled(IconContainer)`
	@media (min-width: 720px) {
		width: 11rem;
		height: 11rem;
	}
`;

export const IconWrapper = styled.button`
	width: 75%;
	height: 75%;
	display: grid;
	place-items: center center;
	outline: 3px solid transparent;
	cursor: pointer;
	border: none;
	border-radius: 50%;
	background-image: linear-gradient(hsl(0, 0%, 83.92156862745098%), hsl(0, 0%, 93.33333333333333%));
	box-shadow: inset 0 6px rgba(184, 184, 184, 0.7);

	img {
		width: 50%;
	}
`;
