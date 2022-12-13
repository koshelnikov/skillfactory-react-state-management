import {HeaderPanel} from "../../header-panel/header-panel";
import {Outlet} from "react-router-dom";

export const Root = () =>
    <>
        <HeaderPanel/>
        <Outlet/>
    </>
