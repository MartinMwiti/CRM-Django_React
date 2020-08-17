import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// fonts
import "./fontawesome";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// React Alert
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./react-alert-template-basic";

// Alerts Options
const alertOptions = {
  timeout: 5000,
  position: 'top center',
  // transition: 'fade',
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
