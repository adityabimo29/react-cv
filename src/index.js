import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import About from './About';
import Content from './Content';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {data} from './data';

ReactDOM.render(
<div>
    <Header /><About /><Content data={data} />< Footer />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
