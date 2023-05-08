import styled from 'styled-components';

type PlayerContainerProps = {
	spaceBetween: boolean;
};

export const GamePlayContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 720px) {
		flex-direction: column-reverse;
	}
`;

export const PlayerContainer = styled.div<PlayerContainerProps>`
	width: 100%;
	display: flex;
	justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between' : 'space-around')};
	align-items: center;

	// Animation
	div:not(.empty) {
		animation-name: puffIn;
		animation-duration: 0.7s;
		animation-fill-mode: backwards;
	}

	@-webkit-keyframes puffIn {
		0% {
			opacity: 0;
			transform-origin: 50% 50%;
			transform: scale(2, 2);
			filter: blur(2px);
		}
		100% {
			opacity: 1;
			transform-origin: 50% 50%;
			transform: scale(1, 1);
			filter: blur(0px);
		}
	}

	@keyframes puffIn {
		0% {
			opacity: 0;
			transform-origin: 50% 50%;
			transform: scale(2, 2);
			filter: blur(2px);
		}
		100% {
			opacity: 1;
			transform-origin: 50% 50%;
			transform: scale(1, 1);
			filter: blur(0px);
		}
	}
`;

export const PlayerIdentity = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding-inline-start: 1.8rem;

	@media (min-width: 720px) {
		padding-inline: 3.6rem 2.5rem;
	}

	p {
		font-size: 0.85rem;
		color: white;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
`;

type SecondPlayerProps = {
	large: boolean;
};

export const SecondPlayer = styled.div<SecondPlayerProps>`
	height: 6rem;
	width: 6rem;
	outline: 3px solid transparent;
	border: none;
	border-radius: 50%;
	background-color: hsl(220, 50%, 15%);

	@media (min-width: 720px) {
		width: ${({ large }) => large && `8rem`};
		height: ${({ large }) => large && `8rem`};
	}
`;
