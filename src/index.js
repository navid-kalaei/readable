import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './css/fonts/lora.css';
import './css/fonts/openSans.css';
import './css/clean-blog.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
