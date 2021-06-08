// import  materialize from 'materialize-css/dist/css/materialize.min.css';
import "./components/matirialize-modal.css";
import "./components/matirialize-zoom.css";
import "./components/matirialize.css";
import React from "react";
import App from "./components/App";
// import swDev from './swDev'
import store from "./store/index";
import { Provider } from "react-redux";
// import firebase from './firebase'

export default function HermesBot(props) {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}
 