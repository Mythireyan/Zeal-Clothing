import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Redux/Store';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';


ReactDOM.render(
<Provider store={store}>	
  <React.StrictMode>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>  
  </BrowserRouter>  
  </React.StrictMode>
</Provider> , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
