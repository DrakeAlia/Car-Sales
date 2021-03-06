import React from 'react';
// import to link the AdditionalFeatures component with the store
import { connect } from 'react-redux'; 

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
    return (
        <div className="content">
            <h4>Additional Features</h4>
            {props.additionalFeatures.length ? (
                <ol type="1">
                    {props.additionalFeatures.map(item => (
                        <AdditionalFeature key={item.id} feature={item} />
                    ))}
                </ol>
            ) : (
                <p>Nice looking car!</p>
            )}
        </div>
    );
};

// mapStateToProps takes state data for additionalFeatures and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
      // the state data for additionalFeatures can be accessed via props in this component
        additionalFeatures: state.additionalFeatures 
    }
}

// the connect function links the AdditionalFeatures component with the store for retrieving data it needs from the store
export default connect(mapStateToProps,{})(AdditionalFeatures);