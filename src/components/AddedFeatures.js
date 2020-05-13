import React from 'react';
// import to link the AddedFeatures component with the store
import { connect } from 'react-redux'; 

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
    return (
        <div className="content">
            <h6>Added features:</h6>
            {props.car.features.length ? (
                <ol type="1">
                    {props.car.features.map(item => (
                        <AddedFeature key={item.id} feature={item} />
                    ))}
                </ol>
            ) : (
                <p>You can purchase items from the store.</p>
            )}
        </div>
    );
};

// mapStateToProps takes the state data for car so its properties can be accessed via props in this component
const mapStateToProps = state => {
    return {
      // the state data for all car properties can be accessed via props in this component
        car: state.car 
    }
}

// the connect function links the AddedFeatures component with the store for retrieving data it needs from the store
export default connect(mapStateToProps, { }) (AddedFeatures)