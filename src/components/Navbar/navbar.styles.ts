import styled from 'styled-components';
import { Container } from '../../global-style';

export const Nav = styled.nav`
	padding: 4rem 0 0.4rem;

	@media screen and (max-width: 640px) {
		padding: 2rem 0 0.4rem;
	}
`;

export const Overlay = styled.div<{ $show: boolean }>`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	inset: 0;
	display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

export const NavLogo = styled.img``;

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavWrapper = styled.div<{ $show: boolean }>`
	@media screen and (max-width: 640px) {
		position: fixed;
		background-color: var(--off-white);
		top: 0;
		right: ${({ $show }) => ($show ? '0' : '-75%')};
		height: 100vh;
		width: 75%;
		padding: 2rem;
		transition: right linear 0.3s;
	}
`;

export const IconMenu = styled.img`
	display: none;
	cursor: pointer;

	@media screen and (max-width: 640px) {
		display: block;
	}
`;

export const IconClose = styled.img`
	width: 30px;
	cursor: pointer;
	position: absolute;
	right: 1rem;
	top: 1rem;
	display: none;

	@media screen and (max-width: 640px) {
		display: block;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	width: 420px;
	justify-content: space-between;
	align-items: center;
	list-style: none;

	@media screen and (max-width: 640px) {
		flex-direction: column;
		width: initial;
		align-items: stretch;
		justify-content: space-between;
		margin-top: 5rem;
		height: 200px;
	}
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
	color: var(--dark-grayish-blue);
	text-decoration: none;
	font-weight: 600;

	&:hover {
		color: var(--soft-orange);
	}

	@media screen and (max-width: 640px) {
		color: var(--very-dark-blue);
	}
`;
