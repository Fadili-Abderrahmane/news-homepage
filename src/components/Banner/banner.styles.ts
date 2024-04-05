import styled from 'styled-components';
import { Container } from '../../global-style';

export const BannerContainer = styled(Container)`
	padding-top: 2rem;
	display: flex;
	justify-content: space-between;
`;

export const BannerLeft = styled.div`
	width: 64%;
`;

export const BannerImage = styled.img`
	width: 100%;
`;

export const BannerContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const BannerContentLeft = styled.div`
	width: 45%;
`;

export const BannerContentRight = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
`;

export const BannerTitle = styled.h1`
	color: var(--very-dark-blue);
	font-size: 4rem;
	font-weight: bolder;
`;

export const BannerText = styled.p`
	color: var(--dark-grayish-blue);
	line-height: 1.5;
`;

export const BannerButton = styled.a`
	margin-top: 3rem;
	color: var(--off-white);
	background-color: var(--soft-red);
	padding: 1rem 2rem;
	text-align: center;
	font-weight: 600;
	width: 200px;
	text-decoration: none;
`;

export const BannerRight = styled.div`
	width: 33%;
`;

export const BannerNew = styled.div`
	background-color: var(--very-dark-blue);
	padding: 1rem;
`;

export const NewTitle = styled.h1`
	color: var(--soft-orange);
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const NewItem = styled.div`
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--dark-grayish-blue);
	padding-top: 1rem;

	&:nth-child(4) {
		border: none;
	}
`;

export const NewItemTitle = styled.h2`
	color: var(--off-white);
`;

export const NewItemText = styled.p`
	color: var(--grayish-blue);
	margin-top: 1rem;
`;
