import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import todoApp from "./reducers/todo";

const store = createStore(todoApp);

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();