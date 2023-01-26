import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/action/cart';

function ProductItem({ product, category, addToCartInjected }) {
	let name = product.name;
	let price = product.price;
	let currency = product.currency;
	let image = product.image;
	let quantity = product.quantity;
	return (
		<div className="col-4 d-flex flex-column align-items-center mt-5">
			<img className="" src={image} alt="" />
			<h3 className="text-center">{name}</h3>
			<h4 className="text-center">
				{price} {currency}
			</h4>

			<button
				className="btn btn-dark mb-4 w-75 font-weight-bold"
				onClick={() => {
					addToCartInjected({ product: { name, price, currency, image, quantity } });
				}}
			>
				Adauga in cos
			</button>
			<Link className="btn btn-primary " to={`/products/${category}/${product.id}`}>
				Detalii Produs
			</Link>
		</div>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addToCartInjected: (payload) => dispatch(addToCart(payload))
	};
}

export default connect(null, mapDispatchToProps)(ProductItem);
