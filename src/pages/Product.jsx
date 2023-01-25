import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../redux/action/cart';

function Product(props) {
	const productId = props.match.params.productId;
	const category = props.match.params.categoryName;
	const items = products[category].items;
	const product = items.find((p) => p.id === +productId);
	console.log(product);

	return (
		<Layout>
			<div className="container-fluid container-min-max-width product-page p-5">
				<h1 className="my-5 h2">{product.name}</h1>
				<div className="product-info d-flex">
					<div className="image-wrapper d-flex mr-5">
						<img src={product.image} alt="" />
					</div>
					<div className="product-details p-5">
						<p className="h3 text-danger">
							{product.price} {product.currency}
						</p>

						<p>Color: {product.colour}</p>
						<p>Material: {product.material}</p>
						<p>Brand: {product.brand}</p>
						<p className="font-weight-bold mb-1">Description:</p>
						<p>{product.description}</p>
						<button
							className="btn btn-dark mb-4 w-75 font-weight-bold "
							onClick={() => {
								props.addToCart({
									product: {
										id: productId,
										name: product.name,
										price: product.price,
										currency: product.currency,
										image: product.image
									}
								});
							}}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (payload) => dispatch(addToCart(payload))
	};
}

export default connect(null, mapDispatchToProps)(Product);
