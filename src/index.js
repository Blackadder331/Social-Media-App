import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import NewsFeed from './components/news-feed';
// import Navbar from './components/navbar';
import Container from './components/container';
// import Navlinks from "./Navlinks";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
