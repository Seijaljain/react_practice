import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import App from './components/App';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
     document.getElementById('root'));
registerServiceWorker();
