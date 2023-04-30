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

		// Animation
		animation-name: rubberBand;
		animation-duration: 1s;
		animation-fill-mode: backwards;
	}

	button {
		animation-name: fadeIn;
		animation-duration: 1s;
		animation-delay: 0.5s;
		animation-fill-mode: backwards;
	}

	@media (min-width: 720px) {
		position: absolute;
		top: 4rem;
		left: 14rem;
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
