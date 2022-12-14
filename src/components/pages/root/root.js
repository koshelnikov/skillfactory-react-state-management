import {HeaderPanel} from "../../header-panel/header-panel";

import {Dashboard} from "../dashboard/dashboard";
import css from './root.module.css'

export const Root = () =>
    <>
        <HeaderPanel/>
        <div className={css.root}>
            <div className={css.content}>
                <Dashboard/>
            </div>
        </div>
    </>
