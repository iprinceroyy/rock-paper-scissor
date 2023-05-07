import styled from 'styled-components';

export const GameStatusContainer = styled.div`
	p {
		text-transform: uppercase;
		color: hsl(0, 11%, 89%);
		letter-spacing: 1px;
		text-align: center;

		// Animation
		animation-name: flash;
		animation-duration: 1s;
		animation-fill-mode: backwards;

		@-webkit-keyframes flash {
			from,
			50%,
			to {
				opacity: 1;
			}

			25%,
			75% {
				opacity: 0;
			}
		}

		@keyframes flash {
			from,
			50%,
			to {
				opacity: 1;
			}

			25%,
			75% {
				opacity: 0;
			}
		}
	}
`;
