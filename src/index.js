import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import logo from './logo.svg';
// import App from './App';
import SingleComponentButton from "./App.js";
import {
  App,
  Header,
  Footer,
  HeaderX,
  MainContent,
  MyComponentX,
  ExplorerMidu,
} from "./App";
import reportWebVitals from "./reportWebVitals";
// import ExportedToReactApp from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <img src={logo} alt="img" width="400px"></img>  wao la carpeta public 
  funciona con manifest y solo debes llamarlo*/}
    <img src="logo512.png" width="400px" alt="logox" />
    <App />
    <Header />
    <HeaderX />
    <MainContent />
    <Footer />
    <ExplorerMidu titlex="hi mate!" />
    <MyComponentX />
    <SingleComponentButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function Page() {
//   return (
//     <h1>HEX</h1>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   // <Page/>
//   // </React.StrictMode>
//   <>
//     <Page/>
//   </>
// );
