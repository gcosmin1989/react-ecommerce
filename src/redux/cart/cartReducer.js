const initialState = {
	products: []
};
//!!!!!!IMPORTANT COSMINE!!!!!!!!
//Nu trebuie sa modificam state-ul primit ca parametru
//Trebuie sa returnam un nou state(o copie modificata a state-ului primit ca param)
function cartReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			let inCart = false;
			const updatedProducts = state.products.map((product) => {
				if (product.id === action.payload.product.id) {
					inCart = true;
					return {
						...product,
						quantity: product.quantity + 1
					};
				} else {
					return product;
				}
			});

			if (!inCart) {
				return Object.assign({}, state, {
					products: [
						...state.products,
						{
							...action.payload.product,
							quantity: 1
						}
					]
				});
			} else {
				return Object.assign({}, state, {
					products: updatedProducts
				});
			}

		case 'REMOVE_FROM_CART':
			const filteredProducts = state.products.filter((product) => {
				return product.id !== action.payload.id;
			});

			return Object.assign({}, state, {
				products: filteredProducts
			});

		default:
			return state;
	}
}

export default cartReducer;
