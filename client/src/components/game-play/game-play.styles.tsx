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
`;

export const SecondPlayer = styled.div`
	height: 6rem;
	width: 6rem;
	outline: 3px solid transparent;
	border: none;
	border-radius: 50%;
	background-color: hsl(220, 50%, 15%);
`;

export const GameResult = styled.div`
	justify-self: center;

	p {
		font-size: 3rem;
		color: white;
		text-transform: uppercase;
		text-align: center;
	}

	button {
		border: none;
		border-radius: 8px;
		outline: 3px solid transparent;
		padding-inline: 4rem;
		padding-block: 1rem;
	}
`;
