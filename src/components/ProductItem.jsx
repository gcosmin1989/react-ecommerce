import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/action/cart';

function ProductItem({ product, category, addToCartInjected }) {
	let name = product.name;
	let price = product.price;
	let currency = product.currency;
	let image = product.image;
	return (
		<div className=" product-item col-4 d-flex flex-column align-items-center">
			<Link to={`/products/${category}/${product.id}`}>Detalii Produs</Link>
			<img className="" src={image} alt="" />
			<h3 className="text-center">{name}</h3>
			<h4 className="text-center">
				{price} {currency}
			</h4>

			<button
				className="btn btn-outline-dark"
				onClick={() => {
					addToCartInjected({ product: { name, price, currency, image } });
				}}
			>
				Adauga in cos
			</button>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addToCartInjected: (payload) => dispatch(addToCart(payload))
	};
}

export default connect(null, mapDispatchToProps)(ProductItem);
