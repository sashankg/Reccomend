import React from 'react';
import { render } from 'react-dom';
import configureStore from './app/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render((
    <Provider store={ store }>
        <h1>Reccomend</h1>
    </Provider>
), document.getElementById('root'));
