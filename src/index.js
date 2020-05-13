import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import Provider to make the store available to the app components wrapped in the connect function
import { Provider } from 'react-redux';
// import to create a store object for holding state data
import { createStore } from 'redux'; 
// import reducer to be the argument passed into createStore
import { reducer } from './reducers/reducer'; 

import 'bulma/css/bulma.css';
import './styles.scss';

// this line creates a store that will hold the state data
const store = createStore(reducer); 

const rootElement = document.getElementById('root');
ReactDOM.render(
    
    <Provider store={store}> {/* Pass store to Provider as props so components can access it */}
        <App />
    </Provider>,
    rootElement
);