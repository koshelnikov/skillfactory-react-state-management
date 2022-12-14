import css from './header-panel.module.css';
import MessageIcon from '../../assets/icons/message.svg';
import {useState} from "react";
import {Budget} from "./budget/budget";
import {useMessages} from "../../messages/context/useMessages";
import {useSelector} from "react-redux";

export const HeaderPanel = () => {
    // 1. Context
    //const {messages} = useMessages();
    // 2. Redux
    const messages = useSelector((store) => store.messages);
    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const toggleMessageVisibility = () =>
        setIsNotificationVisible(!isNotificationVisible);

    return (
        <ul className={css.headerPanel} >
            <li className={css.headerNav} onClick={() => toggleMessageVisibility()}>
                <div className={css.messageButton} >
                    <img src={MessageIcon} />
                    {unreadMessagesCounter > 0 && <Budget className={css.messageBudget} value={unreadMessagesCounter}/>}
                </div>
            </li>
        </ul>
    )
}
