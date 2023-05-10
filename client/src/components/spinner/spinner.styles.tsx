import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid hsl(0, 0%, 80.7843137254902%);
	border-radius: 50%;
	border-top-color: hsl(261, 73%, 60%);
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
