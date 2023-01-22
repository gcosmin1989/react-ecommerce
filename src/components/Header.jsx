import { Link } from 'react-router-dom';
import logo from '../assets/images/cosmin-logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { Component } from 'react';
import React from 'react';
import { signInWithGoogle, signInWithFacebook } from '../firebase-init';

class Header extends Component {
	render() {
		return (
			<div className="header d-flex justify-content-between align-items-center container">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>

				<div>
					<Link to="/login">Login</Link>
					<ShoppingCart />
				</div>
			</div>
		);
	}
}

export default Header;
