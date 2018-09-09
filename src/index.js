import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import StoreReducer from './reducers/store-reducer';
import InitialStore from './initial-store';
import Provider from '../node_modules/react-redux/lib/components/Provider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const store = createStore(StoreReducer, InitialStore);

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
