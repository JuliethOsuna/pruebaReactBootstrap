import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Main from './Main';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
document.getElementById('root')
);
