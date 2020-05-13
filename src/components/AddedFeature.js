import React from 'react';
// import to link the AddedFeature component with the store
import { connect } from 'react-redux'; 
// imported removeFeature action creator
import { removeFeature } from '../actions/actions';

const AddedFeature = props => {
    return (
        <li>
            {/* add an onClick to run a function to remove a feature */}
            <button className="button"
                    onClick={()=>
                    {props.removeFeature(props.feature)}}>
                X
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

// mapStateToProps takes state data for features so its properties can be accessed via props in this component
const mapStateToProps = state => {
    return {
      
        features: state.features 
    }
}

// the connect function links the AddedFeature component with the store for retrieving data it needs from the store
export default connect(mapStateToProps, { removeFeature }) (AddedFeature);