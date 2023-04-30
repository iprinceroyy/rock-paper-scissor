import styled from 'styled-components';
import bgTriangle from '../assets/images/bg-triangle.svg';

export const GameBodyContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	gap: 1rem 2rem;
	background-image: url(${bgTriangle});
	background-repeat: no-repeat;
	background-size: 70% 60%;
	background-position: center;

	// Animation
	animation-name: zoomIn;
	animation-duration: 1s;
	animation-fill-mode: backwards;

	@media (min-width: 720px) {
		padding-inline: 7.5rem;
		background-size: 50% 60%;
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
