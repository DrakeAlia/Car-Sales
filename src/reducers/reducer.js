 // imported action types from actions to be used in reducer function
import { ADD_FEATURE, REMOVE_FEATURE} from '../actions/actions'; 

// moved the initial state data from the App component i had bfore
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

// created reducer function to take the previous state and an action, and returns the next state
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                // goes through the state and copies it
                ...state, 
                additionalPrice: state.additionalPrice + action.payload.price, // Sums the added item's price to the current additional price value
                car: {
                    ...state.car, // goes through the state data of the properties in the car object and copies it
                    features: state.car.features.concat(action.payload) // adds the new action.payload/item to features
                },
                additionalFeatures: state.additionalFeatures.filter( // removes the item just added to features from additionalFeatures that can be added
                    item => item !== action.payload // only adds items to additionalFeatures that don't match the item that was just added to features
                )
            };
        case REMOVE_FEATURE:
            return {
                // goes through the state and copies it
                ...state, 
                additionalPrice: state.additionalPrice - action.payload.price, // subtracts the removed item's price from the current additional price value
                car: {
                    ...state.car, // goes through the state data of the properties in the car object and copies it
                    features: state.car.features.filter(item => item !== action.payload) // filters out item being removed and it is not added back into features
                },
                additionalFeatures: [...state.additionalFeatures, action.payload] // adds the item removed item from features into additional features
            };
        default:
            return state;
    }
}