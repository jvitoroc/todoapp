import React from 'react';
import {render} from 'react-dom';
import TodoApp from './components/TodoApp/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import todoApp from "./reducers/todo";
import {enableBatching} from 'redux-batched-actions';

const store = createStore(enableBatching(todoApp));

render(<Provider store={store}><TodoApp/></Provider>, document.getElementById('root'));
registerServiceWorker();