import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';

const initialState={
    addTask: {
        weekno: 2,
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: ''
    }
}

const store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
