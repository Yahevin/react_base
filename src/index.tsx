import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "@/store";
import "@/global-styles/reset.css";
import "@/global-styles/base.css";

ReactDOM.render(
    <Provider store={store}>
        <Router basename={''}>
        </Router>
    </Provider>,
    document.getElementById('app')
);
