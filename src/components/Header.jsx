import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cosmin-logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase-init';

class Header extends Component {
	auth = getAuth(app);
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}
	componentDidMount() {
		onAuthStateChanged(this.auth, (data) => {
			this.setState({ user: data.user });
		});
	}

	signIn = () => {
		this.props.signInWithPopup(this.auth, new GoogleAuthProvider()).then((data) => {
			this.setState(() => {
				return { user: data.user };
			});
		});
	};
	logOut = () => {
		signOut(this.auth).then(() => {
			this.setState({ user: null });
		});
	};

	render() {
		return (
			<div className="header d-flex justify-content-between align-items-center container">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				{this.user && this.user.displayName}
				<div>
					<Link to="/login">Login</Link>
					<ShoppingCart />
				</div>
				{this.user ? (
					<button className="btn btn-link" onClick={() => this.logOut()}>
						Sign Out
					</button>
				) : (
					<button className="btn btn-link" onClick={() => this.signIn()}>
						Log In
					</button>
				)}
			</div>
		);
	}
}

export default Header;
