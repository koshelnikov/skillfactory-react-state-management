import css from './header-panel.module.css';
import {HeaderNav} from "./header-nav/header-nav";
import MessageIcon from '../../assets/icons/message.svg';
import {Notifications} from "./notifications/notifications";
import {useState} from "react";
import {Budget} from "../budget/budget";
import {useMessages} from "../../messages/context/useMessages";

export const HeaderPanel = () => {
    const {unreadMessagesCounter} = useMessages();

    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const toggleMessageVisibility = () =>
        setIsNotificationVisible(!isNotificationVisible);

    return (
        <div className={css.headerPanel} >
            <HeaderNav onClick={() => toggleMessageVisibility()}>
                <div className={css.messageButton} >
                    <img src={MessageIcon} />
                    {unreadMessagesCounter > 0 && <Budget className={css.messageBudget} value={unreadMessagesCounter}/>}
                </div>
                <Notifications visible={isNotificationVisible}/>
            </HeaderNav>
        </div>
    )
}
