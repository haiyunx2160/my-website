import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import App from "./components/App";
import reducers from './reducers';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import fbConfig from './config/fbConfig';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then(()=>{

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.querySelector('#root')
    );

});

