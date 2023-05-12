import styled from 'styled-components';

export const GameResultContainer = styled.div`
	margin-block-start: 3rem;
	justify-self: center;
	display: grid;
	justify-items: center;
	gap: 0.7rem;

	@media (min-width: 720px) {
		position: absolute;
		top: 3%;
		left: 37%;
	}

	p {
		font-size: 3.2rem;
		color: white;
		text-transform: uppercase;

		// Animation
		animation-name: rubberBand;
		animation-duration: 1s;
		animation-delay: 0.7s;
		animation-fill-mode: backwards;

		@media (min-width: 720px) {
			font-size: 2.5rem;
		}

		@media (max-width: 280px) {
			font-size: 2rem;
		}
	}

	button {
		animation-name: fadeIn;
		animation-duration: 1s;
		animation-delay: 1.3s;
		animation-fill-mode: backwards;
	}

	@-webkit-keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@-webkit-keyframes rubberBand {
		from {
			opacity: 0;
			transform: scale3d(1, 1, 1);
		}

		30% {
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}

	@keyframes rubberBand {
		from {
			opacity: 0;
			transform: scale3d(1, 1, 1);
		}

		30% {
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			transform: scale3d(1.05, 0.95, 1);
		}

		to {
			transform: scale3d(1, 1, 1);
		}
	}
`;
