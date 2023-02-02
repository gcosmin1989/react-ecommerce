export function addToFav(payload) {
	return { type: 'ADD_TO_FAV', payload: payload };
}

export function removeFromFav(payload) {
	return {
		type: 'REMOVE_FROM_FAV',
		payload: payload
	};
}
