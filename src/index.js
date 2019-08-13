import React from 'react';
import ReactDOM from 'react-dom';
import './assets/common.scss';
import './assets/reset.css';
import './config/rem';
import App from '../src/page/AppRoot/App';
import combinedReducers from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import rootSaga from './redux/saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
