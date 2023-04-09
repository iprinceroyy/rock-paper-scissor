import styled from 'styled-components';
import bgTriangle from '../../assets/images/bg-triangle.svg';

export const GameBodyContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	gap: 1rem 2rem;
	background-image: url(${bgTriangle});
	background-repeat: no-repeat;
	background-size: 70% 60%;
	background-position: center;

	@media (min-width: 720px) {
		padding-inline: 5rem;
		background-size: 50% 60%;
	}
`;
