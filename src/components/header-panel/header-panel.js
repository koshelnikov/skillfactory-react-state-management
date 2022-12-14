import css from './header-panel.module.css';
import {HeaderNav} from "./header-nav/header-nav";
import MessageIcon from '../../assets/icons/message.svg';
import {Notifications} from "./notifications/notifications";
import {useState} from "react";
import {Budget} from "../budget/budget";
import {useMessages} from "../../messages/context/useMessages";

export const HeaderPanel = () => {
    const {messages} = useMessages();
    const messagesCount = messages.length
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);


    return (
        <div className={css.headerPanel} >
            <HeaderNav onClick={() => setIsNotificationVisible(!isNotificationVisible)}>
                <div className={css.messageButton} >
                    <img src={MessageIcon} />
                    {messagesCount > 0 && <Budget className={css.messageBudget} value={messagesCount}/>}
                </div>
                <Notifications visible={isNotificationVisible}/>
            </HeaderNav>
        </div>
    )
}
