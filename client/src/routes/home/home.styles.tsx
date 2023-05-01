import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChoiceContainer = styled.div`
	width: min(80%, 560px);
	position: absolute;
	top: 30%;

	button {
		display: block;
		margin-block-start: 2rem;
		width: 100%;
		animation-duration: 1s;
		animation-fill-mode: backwards;
	}
`;

export const PlayLink = styled(Link)`
	text-decoration: none;
`;

export const PlayOnlineLink = styled(PlayLink)`
	button {
		animation-name: bounceInLeft;
	}

	@keyframes bounceInLeft {
		from,
		60%,
		75%,
		90%,
		to {
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		0% {
			opacity: 0;
			transform: translate3d(-3000px, 0, 0) scaleX(3);
		}

		60% {
			opacity: 1;
			transform: translate3d(25px, 0, 0) scaleX(1);
		}

		75% {
			transform: translate3d(-10px, 0, 0) scaleX(0.98);
		}

		90% {
			transform: translate3d(5px, 0, 0) scaleX(0.995);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}
`;

export const PlayOfflineLink = styled(PlayLink)`
	button {
		animation-name: bounceInRight;
	}

	@keyframes bounceInRight {
		from,
		60%,
		75%,
		90%,
		to {
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		from {
			opacity: 0;
			transform: translate3d(3000px, 0, 0) scaleX(3);
		}

		60% {
			opacity: 1;
			transform: translate3d(-25px, 0, 0) scaleX(1);
		}

		75% {
			transform: translate3d(10px, 0, 0) scaleX(0.98);
		}

		90% {
			transform: translate3d(-5px, 0, 0) scaleX(0.995);
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}
`;

// .choice {

// 	a {
// 	}
// }

// .play-online {

// }

// .play-offline {

// }
