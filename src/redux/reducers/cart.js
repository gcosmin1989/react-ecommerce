const initialState = {
	products: []
};
//!!!!!!IMPORTANT COSMINE!!!!!!!!
//Nu trebuie sa modificam state-ul primit ca parametru
//Trebuie sa returnam un nou state(o copie modificata a state-ului primit ca param)
function cartReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			const newState = {
				...state,
				products: [ ...state.products, action.payload.product ]
			};
			return newState;
		default:
			return state;
	}
}

export default cartReducer;
