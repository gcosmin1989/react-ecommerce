import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	const currentYear = new Date();
	return (
		<div className="py-0 my-4">
			<div className="nav justify-content-center border-bottom pb-3  ">
				<Link className=" nav-link px-2 text-muted" to="/about">
					About
				</Link>

				<Link className="nav-link px-2 text-muted" to="/">
					Home
				</Link>
			</div>
			<p className="text-center text-muted">@ {currentYear.getFullYear()} Cosmin Shop</p>
		</div>
	);
}

export default Footer;
