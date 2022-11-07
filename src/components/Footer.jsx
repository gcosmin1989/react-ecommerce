import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div>
			<Link to="/about">About</Link>
			<Link to="/">Home</Link>
		</div>
	);
}

export default Footer;
