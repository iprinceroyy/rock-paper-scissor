import styled from 'styled-components';

export const RulesContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	display: grid;
	gap: 3rem;
	justify-content: center;
	justify-items: center;
	padding-inline: 2rem;
	padding-block: 5rem 1.5rem;

	@media (min-width: 720px) {
		min-height: auto;
		width: 22rem;
		inset: 0;
		margin: auto;
		aspect-ratio: 1;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		align-items: baseline;
		border-radius: 8px;
		padding-block: 1.5rem 2rem;
		padding-inline: 1.5rem;
	}

	p {
		font-size: 2rem;
		font-weight: 700;
		color: hsl(229, 25%, 31%);
		text-transform: uppercase;

		@media (min-width: 720px) {
			font-size: 1.5rem;
			justify-self: flex-start;
		}
	}
`;

export const RulesImageContainer = styled.div`
	@media (min-width: 720px) {
		width: 90%;
		justify-self: center;
		grid-area: 2 / 1 / span 1 / span 2;

		img {
			width: 100%;
		}
	}
`;

export const RulesCloseContainer = styled.div`
	@media (min-width: 720px) {
		grid-area: 1 / 2 / span 1 / span 1;
		justify-self: flex-end;
	}
`;
