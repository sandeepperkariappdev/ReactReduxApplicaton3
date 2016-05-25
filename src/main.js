import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./gallery";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const store = createStore(reducer);
ReactDOM.render( 
    <Provider store={store}>
            <Gallery />
    </Provider>,
    document.getElementById("root")
);
