import {Dashboard} from "./components/pages/dashboard/dashboard";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Notifications} from "./components/pages/notifications/notifications";
import {Root} from "./components/pages/root/root";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/notifications',
                element: <Notifications/>
            }
        ]
    }
])

const App = () => <RouterProvider router={router}/>

export default App;
