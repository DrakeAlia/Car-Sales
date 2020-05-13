// export action type ADD_FEATURE to the reducer
export const ADD_FEATURE = "ADD_FEATURE";
// export action type REMOVE_FEATURE to the reducer
export const REMOVE_FEATURE = "REMOVE_FEATURE"; 

// addFeature action creator for buying features to the car
export const addFeature = item => {
  
    return {
        type: ADD_FEATURE,
        payload: item
    }
};

// removeFeature action creator for removing features from the car
export const removeFeature = item => {
    
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
};