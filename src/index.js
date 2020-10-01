
import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Provider from './context'
import './I18n';

ReactDOM.render(
    <Provider>
        <Suspense fallback='loading...'>
            <Router/>
        </Suspense>
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
