import React, { useState } from 'react';
import {
	IconClose,
	IconMenu,
	MenuItem,
	MenuLink,
	Nav,
	NavContainer,
	NavLogo,
	NavMenu,
	NavWrapper,
	Overlay,
} from './navbar.styles';

const Navbar = () => {
	const [show, setShow] = useState<boolean>(false);

	//handle show
	function showMenu() {
		setShow(true);
	}

	//handle close
	function closeMenu() {
		setShow(false);
	}

	return (
		<Nav>
			<NavContainer>
				<NavLogo src={require('../../assets/images/logo.svg').default} />
				<IconMenu
					onClick={showMenu}
					src={require('../../assets/images/icon-menu.svg').default}
				/>
				<Overlay onClick={closeMenu} $show={show} />
				<NavWrapper $show={show}>
					<NavMenu>
						<IconClose
							onClick={closeMenu}
							src={require('../../assets/images/icon-menu-close.svg').default}
						/>
						<MenuItem>
							<MenuLink href='#'>Home</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href='#'>New</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href='#'>Popular</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href='#'>Trending</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href='#'>Categories</MenuLink>
						</MenuItem>
					</NavMenu>
				</NavWrapper>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
