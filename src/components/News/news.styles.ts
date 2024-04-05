import styled from 'styled-components';
import { Container } from '../../global-style';

export const NewsContainer = styled(Container)`
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 730px) {
		flex-direction: column;
	}
`;

export const Article = styled.div`
	width: 30%;
	display: flex;

	@media screen and (max-width: 730px) {
		width: 100%;
		margin-bottom: 1rem;
	}
`;

export const ArticleImage = styled.img`
	width: 100px;
`;

export const ArticleContent = styled.div`
	margin-left: 1rem;
`;

export const ArticelNumber = styled.span`
	font-size: 2rem;
	color: var(--grayish-blue);
	font-weight: 600;
`;

export const ArticelTitle = styled.h3`
	color: var(--very-dark-blue);
	margin: 0.7rem 0;
`;

export const ArticleText = styled.p`
	line-height: 1.8;
	color: var(--dark-grayish-blue);
`;
