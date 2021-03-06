import React from 'react';
 // import to link the Header component with the store
import { connect } from 'react-redux';

const Header = props => {
    return (
        <>
            <figure className="image is-140x140">
                <img src={props.car.image} alt={props.car.name} />
            </figure>
            <h1>{props.car.name}</h1>
            <p>Amount: ${props.car.price}</p>
        </>
    );
};

// mapStateToProps takes state data image, name and price and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
      // the state data for all car properties can be accessed via props in this component
        car: state.car 
    }
}

// the connect function links the Header component with the store for retrieving data it needs from the store
export default connect(mapStateToProps, {})(Header);
