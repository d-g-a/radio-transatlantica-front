import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Provider from './context'

ReactDOM.render(
    <Provider>
        <Router/>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
