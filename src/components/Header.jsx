import { Link } from 'react-router-dom';
import logo from '../assets/images/cosmin-logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import React from 'react';
import { signOut } from '../firebase-init';

function Header() {
	return (
		<div className="header d-flex justify-content-between align-items-center container">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<div>
				{localStorage.name ? (
					<p>
						Esti logat ca: <b>{localStorage.name}</b>!
					</p>
				) : (
					''
				)}
			</div>
			<div>
				{localStorage.name ? (
					<Link to="/" onClick={signOut}>
						SignOut
					</Link>
				) : (
					<Link to="/login">Login</Link>
				)}
				<ShoppingCart />
			</div>
		</div>
	);
}

export default Header;
