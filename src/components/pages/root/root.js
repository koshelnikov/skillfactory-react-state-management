import {HeaderPanel} from "../../header-panel/header-panel";
import {Outlet} from "react-router-dom";
import {MessageForm} from "./message-form/message-form";
import css from './root.module.css'

export const Root = () =>
    <>
        <HeaderPanel/>
        <div className={css.root}>
            <MessageForm/>
            <div className={css.splitter}/>
            <div className={css.content}>
                <Outlet/>
            </div>
        </div>
    </>
