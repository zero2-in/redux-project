import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { createStore } from "redux";
import reducers from './reducers';

const store = createStore(reducers);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);