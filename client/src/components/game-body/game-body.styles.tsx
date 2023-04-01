import styled from 'styled-components';

type BackgroundImageProps = {
	imageUrl: string;
};

export const GameBodyContainer = styled.div<BackgroundImageProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem 2.2rem;
	background-image: ${({ imageUrl }) => `url(${imageUrl});`};
	background-repeat: no-repeat;
	background-size: 60% 50%;
	background-position: center;

	@media (min-width: 1024px) {
		padding-inline: 2rem;
	}
`;
