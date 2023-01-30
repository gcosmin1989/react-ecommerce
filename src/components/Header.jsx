import { Link } from 'react-router-dom';
import logo from '../assets/images/cosmin-logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import React from 'react';
import { signOut } from '../firebase-init';
import { connect } from 'react-redux';

function Header(props) {
	const { numberOfProductsInCart } = props;
	return (
		<div className="header d-flex justify-content-between align-items-center container">
			<Link to="/">
				<img src={logo} alt="logo" />
			</Link>
			<div>
				{localStorage.name ? (
					<p>
						Esti logat:<b> {localStorage.name}</b>!
						<Link to="/" onClick={signOut}>
							Logout
						</Link>
					</p>
				) : (
					<Link to="/login">LogIn</Link>
				)}
			</div>
			<div>
				<Link to="/cart">
					<ShoppingCart />
				</Link>
				<p>{numberOfProductsInCart}</p>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	console.log(state.products);
	return {
		numberOfProductsInCart: state.products.length
	};
}

export default connect(mapStateToProps)(Header);
