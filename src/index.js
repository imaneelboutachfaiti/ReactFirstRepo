import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

let model = { clicks: 0 }; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
serviceWorker.unregister();
