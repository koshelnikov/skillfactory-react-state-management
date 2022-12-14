import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import reducer from "./state-management/redux/reducer";
import {Provider} from "react-redux";
import {MessagesProvider} from "./state-management/context/useMessages";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./state-management/redux-saga/sagas";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// 1. Context
//root.render(<MessagesProvider><App /></MessagesProvider>);

// 2. Redux
//const store = createStore(redux, {
//    state-management: [],
//    isLoading: false
//});
//root.render(<Provider store={store}><App /></Provider>);

// 3. Redux Thunk
//const store = createStore(reducer, {
//    state-management: [],
//    isLoading: false
//}, applyMiddleware(thunk));
//root.render(<Provider store={store}><App /></Provider>);

// 4. Redux Saga
//const sagaMiddleware = createSagaMiddleware();
//const store = createStore(reducer, {
//    state-management: [],
//    isLoading: false
//}, applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(rootSaga);
//root.render(<Provider store={store}><App /></Provider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
