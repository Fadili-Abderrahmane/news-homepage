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
