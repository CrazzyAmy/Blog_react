import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { HashRouter, Route, BrowserRouter} from "react-router-dom";
import $ from 'jquery';
import './all.css';;

class MyComponent extends React.Component {
  handleClick() {
    $('html, body').animate({scrollTop: 0}, 1500);
  }
  render() {
    return (
      <button>Scroll to top</button>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap');
      </style>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
