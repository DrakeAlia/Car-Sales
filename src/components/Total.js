import React from 'react';
// import to link the Total component with the store
import { connect } from 'react-redux'; 

const Total = props => {
    return (
        <div className="content">
            <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
        </div>
    );
};

// mapStateToProps takes state data price and additionalPrice and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
      // the state data for all car properties can be accessed via props in this component
      // the state data for additionalPrice can be accessed via props in this component
        car: state.car, 
        additionalPrice: state.additionalPrice 
    }
}

// the connect function links the Total component with the store for retrieving data it needs from the store
export default connect(mapStateToProps, {})(Total);