import React from 'react';
// import to link the AdditionalFeature component with the store
import { connect } from 'react-redux'; 
// imported addFeature action creator
import { addFeature } from "../actions/actions"; 

const AdditionalFeature = props => {
    return (
        <li>
            {/* add an onClick that will let you add a feature to your car */}
            <button
                onClick={()=> {props.addFeature(props.feature)}}
                className="button"
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

// mapStateToProps takes state data for price and features and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
      // the state data for all the feature object's properties can be accessed via props
        features: state.features 
    }
}

// the connect function links the AdditionalFeature component with the store for retrieving data it needs from the store
// connect dispatches the addFeature action creator to the reducer and allows addFeature to be accessed via props
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);