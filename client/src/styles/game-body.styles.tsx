import styled from 'styled-components';
import bgPentagon from '../assets/images/bg-pentagon.svg';

export const GameBodyContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	gap: 1.3rem 2.2rem;
	background-image: url(${bgPentagon});
	background-repeat: no-repeat;
	background-size: 70% 70%;
	background-position: center;

	// Animation
	animation-name: zoomIn;
	animation-duration: 1s;
	animation-fill-mode: backwards;

	@media (min-width: 720px) {
		padding-inline: 7.5rem;
		background-size: 50%;
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
