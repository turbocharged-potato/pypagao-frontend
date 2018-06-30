import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
