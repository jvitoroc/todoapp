import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import saga from "./sagas";
import { BrowserRouter } from 'react-router-dom'
import todoApp from "./reducers/todo";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    todoApp,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();