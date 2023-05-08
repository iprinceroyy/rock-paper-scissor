import styled from 'styled-components';
import bgPentagon from '../assets/images/bg-pentagon.svg';

export const GameBodyContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	gap: 1.3rem 2.2rem;
	background-image: url(${bgPentagon});
	background-repeat: no-repeat;
	background-size: 64vw;
	background-position: center;

	@media (min-width: 500px) and (max-width: 720px) {
		background-size: 67% 65%;
	}

	// Animation
	animation-name: zoomIn;
	animation-duration: 1s;
	animation-fill-mode: backwards;

	@media (min-width: 720px) {
		padding-inline: 9.5rem;
		background-size: 47%;
		gap: 1.3rem 3.2rem;
	}

	@keyframes zoomIn {
		from {
			opacity: 0;
			transform: scale3d(0.3, 0.3, 0.3);
		}

		50% {
			opacity: 1;
		}
	}
`;
