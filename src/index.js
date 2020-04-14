import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Routing
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import store from './redux/store';


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</Provider>
  , document.getElementById('root'));
