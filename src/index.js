import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
