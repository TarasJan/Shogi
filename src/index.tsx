import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux"; 
import { createStore } from 'redux';
import App from './App';
import './index.css';
import InitialStore from './initial-store';
import StoreReducer from './reducers/store-reducer';
import registerServiceWorker from './registerServiceWorker';

  const store = createStore(StoreReducer, InitialStore);

ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
