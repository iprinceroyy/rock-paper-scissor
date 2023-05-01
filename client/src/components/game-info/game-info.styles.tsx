import styled from 'styled-components';

export const GameInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-block: 0.7rem;
	padding-inline: 1rem 0.7rem;
	border: 3px solid hsl(217, 16%, 45%);
	border-radius: 5px;
	align-items: center;

	//Animation
	animation-name: flipInX;
	animation-duration: 1s;
	animation-delay: 0.6s;
	animation-fill-mode: backwards;

	@media (min-width: 720px) {
		margin-inline: 4rem;
	}
`;

export const GameLogo = styled.div`
	display: grid;
	img {
		width: min(22vw, 120px);
	}
`;

export const GameScore = styled.div`
	text-align: center;
	padding-block: 0.5rem;
	padding-inline: 1.4rem;
	background-color: white;
	border-radius: 4px;

	@media (max-width: 281px) {
		padding-block: 0.2rem;
		padding-inline: 0.7rem;
	}

	@media (min-width: 720px) {
		padding-block: 0.5rem;
		padding-inline: 2rem;
		border-radius: 7px;
	}

	& :first-child {
		font-size: 0.7rem;
		color: hsl(230, 89%, 62%);
		font-weight: 700;
		letter-spacing: 1px;
	}

	& :last-child {
		font-size: 2.5rem;
		font-weight: 700;

		@media (max-width: 281px) {
			font-size: 1.5rem;
		}
	}

	@-webkit-keyframes flipInX {
		from {
			transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			animation-timing-function: ease-in;
			opacity: 0;
		}

		40% {
			transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			animation-timing-function: ease-in;
		}

		60% {
			transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			opacity: 1;
		}

		80% {
			transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		}

		to {
			transform: perspective(400px);
		}
	}

	@keyframes flipInX {
		from {
			transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			animation-timing-function: ease-in;
			opacity: 0;
		}

		40% {
			transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			animation-timing-function: ease-in;
		}

		60% {
			transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			opacity: 1;
		}

		80% {
			transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		}

		to {
			transform: perspective(400px);
		}
	}
`;