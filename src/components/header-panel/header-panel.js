import css from './header-panel.module.css';
import {HeaderNav} from "./header-nav/header-nav";
import MessageIcon from './../../assets/icons/message.svg';
import {Notifications} from "./notifications/notifications";
import {useEffect, useState} from "react";

export const HeaderPanel = () => {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    useEffect(() => {
        const onESC = (ev) => {
            if (ev.key === "Escape") {
                setIsNotificationVisible(false)
            }
        };
        window.addEventListener("keyup", onESC, false);
        return () => {
            window.removeEventListener("keyup", onESC, false);
        };
    }, []);

    return (
        <div className={css.headerPanel}>
            <HeaderNav>
                <div onClick={() => setIsNotificationVisible(!isNotificationVisible)}>
                    <img src={MessageIcon} />
                    <Notifications visible={isNotificationVisible}/>
                </div>
            </HeaderNav>
        </div>
    )
}
