

// Moved the initial state data from the App component
export const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};

// Created reducer function to take the previous state and an action, and returns the next state
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_FEATURES":
			return {
				...state,  // Iterates through the state and copies it
				additionalPrice: state.additionalPrice + action.payload.price, // Sums the added item's price to the current additional price value
				car: {...state.car,
					features: [ ...state.car.features, action.payload ]
				},
				additionalFeatures: [ ...state.additionalFeatures.filter((item) => item.id !== action.payload.id) ]
			};
		case "REMOVE_FEATURES":
			return {
				...state, // Iterates through the state and copies it
				additionalPrice: state.additionalPrice - action.payload.price, // Subtracts the removed item's price from the current additional price value
				car: {
					...state.car, // Iterates through the state data of the properties in the car object and copies it
					features: [ ...state.car.features.filter((item) => item.id !== action.payload.id) ] // Filters out item being removed and it is not added back into features
				},
				additionalFeatures: [ ...state.additionalFeatures, action.payload ] // Adds the item removed item from features into additional features
			};
		default:
			return state;
	}
};
