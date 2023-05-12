import styled from 'styled-components';

export const RoomContainer = styled.div`
	width: min(80%, 420px);
	display: flex;
	flex-direction: column;
	gap: 4rem;
	margin-block: 10rem;

	button {
		width: 100%;

		// Animation
		animation-name: fadeInUp;
		animation-duration: 1s;
		animation-delay: 0.8s;
		animation-fill-mode: backwards;
	}

	p {
		font-size: 1rem;
		color: hsl(217, 72%, 86%);
		letter-spacing: 1.5px;
		text-transform: uppercase;
		text-align: center;

		&.invalid-name {
			animation-name: wobble;
			animation-duration: 1s;
			animation-fill-mode: backwards;
		}
	}

	@keyframes wobble {
		from {
			transform: translate3d(0, 0, 0);
		}

		15% {
			transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
		}

		30% {
			transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
		}

		45% {
			transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
		}

		60% {
			transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
		}

		75% {
			transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}

	@-webkit-keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`;

export const FormInput = styled.input`
	width: 100%;
	font-size: 1.1rem;
	color: hsl(217, 72%, 86%);
	font-weight: 700;
	letter-spacing: 2px;
	text-transform: uppercase;
	background-color: transparent;
	outline: 3px solid transparent;
	border: 2px solid white;
	border-radius: 10px;
	padding: 0.8rem;
	margin-block-end: 1rem;

	::placeholder {
		font-size: 0.8rem;
	}

	// Animation
	animation-name: fadeInDown;
	animation-duration: 1s;
	animation-fill-mode: backwards;

	@-webkit-keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}

		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`;
