import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import "./index.css";

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
