import {Dashboard} from "./components/pages/dashboard/dashboard";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Notifications} from "./components/pages/notifications/notifications";
import {Root} from "./components/pages/root/root";
import {MessagesProvider} from "./messages/context/useMessages";

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

const App = () =>
    <MessagesProvider>
        <RouterProvider router={router}/>
    </MessagesProvider>

export default App
