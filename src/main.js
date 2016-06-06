import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./gallery";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"; 
import { Provider } from "react-redux";
import reducer from "./reducer";
import {sayHello, watchForLoadImages} from "./sagas"

const store = createStore(reducer,                          applyMiddleware(createSagaMiddleware(sayHello,watchForLoadImages)));
ReactDOM.render( 
    <Provider store={store}>
            <Gallery />
    </Provider>,
    document.getElementById("root")
);
