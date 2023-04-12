import styled from 'styled-components';

type GamePlayContainerProps = {
	spaceBetween: boolean;
};

export const GamePlayContainer = styled.div<GamePlayContainerProps>`
	display: flex;
	justify-content: ${({ spaceBetween }) => (spaceBetween ? `space-between` : `space-around`)};
	align-items: center;
`;

export const PlayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (min-width: 720px) {
		flex-direction: column-reverse;
		gap: 2rem;
	}

	p {
		font-size: 0.85rem;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
`;

type SecondPlayerProps = {
	bigSize: boolean;
};

export const SecondPlayer = styled.div<SecondPlayerProps>`
	height: 6rem;
	width: 6rem;
	outline: 3px solid transparent;
	border: none;
	border-radius: 50%;
	background-color: hsl(220, 50%, 15%);

	@media (min-width: 720px) {
		width: ${({ bigSize }) => bigSize && `8rem`};
		height: ${({ bigSize }) => bigSize && `8rem`};
	}
`;
