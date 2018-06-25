import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";

import {createStore} from "redux";
import todoApp from "./reducers/todo";

const store = createStore(todoApp);

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();