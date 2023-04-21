import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Context from "./components/pages/context/context";
import ReduxConnect from "./components/pages/react-redux-connect/redux";
import ReduxHooks from "./components/pages/react-redux-hooks/redux";
import ReduxThunk from './components/pages/redux-thunk/redux-thunk';
import ReduxSaga from './components/pages/redux-saga/redux-saga';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Context/>
        },
        {
            path: '/react-redux-connect',
            element: <ReduxConnect/>
        },
        {
            path: '/react-redux-hooks',
            element: <ReduxHooks/>
        },
        {
            path: '/react-redux-hooks-thunk',
            element: <ReduxThunk/>
        },
        {
            path: 'react-redux-hooks-saga',
            element: <ReduxSaga/>
        }
    ]
)

export default () => <RouterProvider router={router}/>
