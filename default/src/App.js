import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Context from "./components/pages/context/context";
import Redux from "./components/pages/react-redux/redux";
import ReduxThunk from './components/pages/redux-thunk/redux-thunk';
import ReduxSaga from './components/pages/redux-saga/redux-saga';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Context/>
        },
        {
            path: '/react-redux',
            element: <Redux/>
        },
        {
            path: '/react-redux-thunk',
            element: <ReduxThunk/>
        },
        {
            path: 'react-redux-saga',
            element: <ReduxSaga/>
        }
    ]
)

export default () => <RouterProvider router={router}/>
