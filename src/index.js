import React from 'react';
//import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

import App from './components/App.jsx';

//const root = createRoot(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <App />
    {/*<React.StrictMode>*/}
  </Provider>
);
