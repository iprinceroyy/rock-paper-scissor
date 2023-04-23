import styled from 'styled-components';

export const GameResultContainer = styled.div`
	justify-self: center;
	display: grid;
	justify-items: center;
	gap: 0.7rem;

	p {
		font-size: 3rem;
		color: white;
		text-transform: uppercase;
	}

	@media (min-width: 720px) {
		position: absolute;
		top: 4rem;
		left: 14rem;
	}
`;
