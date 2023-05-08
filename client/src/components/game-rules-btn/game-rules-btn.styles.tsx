import styled from 'styled-components';

export const ButtonContainer = styled.div`
	display: grid;

	//Animation
	animation-name: slideInUp;
	animation-duration: 1s;
	animation-delay: 1.3s;
	animation-fill-mode: backwards;

	@media (min-width: 1024px) {
		position: absolute;
		bottom: 3rem;
		right: 3rem;
	}

	@-webkit-keyframes slideInUp {
		from {
			transform: translate3d(0, 100%, 0);
			opacity: 0;
		}

		to {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}

	@keyframes slideInUp {
		from {
			transform: translate3d(0, 100%, 0);
			opacity: 0;
		}

		to {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}
`;
