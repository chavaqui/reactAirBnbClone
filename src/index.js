import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ExportedToReactApp from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <img src={logo} alt="img" width="400px"></img>
  <ExportedToReactApp.MyComponentX/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
