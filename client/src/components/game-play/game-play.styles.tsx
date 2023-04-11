import styled from 'styled-components';

export const GamePlayContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PlayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-size: 0.85rem;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-block-start: 1rem;
	}

	@media (min-width: 720px) {
		flex-direction: column-reverse;
	}
`;

export const SecondPlayer = styled.div`
	height: 6rem;
	width: 6rem;
	outline: 3px solid transparent;
	border: none;
	border-radius: 50%;
	background-color: hsl(220, 50%, 15%);
`;
