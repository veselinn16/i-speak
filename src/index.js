import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const renderer = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'));
}

renderer();

store.subscribe(renderer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function fancyLog() {
    console.log("%c Rendered with � � � ", "background: purple; color: #FFF");
    console.log(store.getState());
}
