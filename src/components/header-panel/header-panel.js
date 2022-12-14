import css from './header-panel.module.css';
import MessageIcon from '../../assets/icons/message.svg';
import {useState} from "react";
import {Budget} from "./budget/budget";
import {useMessages} from "../../state-management/context/useMessages";
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

export const HeaderPanel = ({unreadMessagesCounter}) => {
    // 1. Context
    //const {state-management} = useMessages();
    // 2. Redux
    //const state-management = useSelector((store) => store.state-management);
    //const unreadMessagesCounter = state-management.filter(item => !item.isRead).length;

    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const toggleMessageVisibility = () =>
        setIsNotificationVisible(!isNotificationVisible);

    return (
        <ul className={css.headerPanel} >
            <li className={css.headerNav}><a href={'/'}>Context</a></li>
            <li className={css.headerNav}><a href={'/redux'}>Redux</a></li>
            <li className={css.headerNav}><a href={'/redux-thunk'}>Redux Thunk</a></li>
            <li className={css.headerNav}><a href={'/redux-saga'}>Redux Saga</a></li>

            <li className={css.headerNav} onClick={() => toggleMessageVisibility()}>
                <div className={css.messageButton} >
                    <img src={MessageIcon} />
                    {unreadMessagesCounter > 0 && <Budget className={css.messageBudget} value={unreadMessagesCounter}/>}
                </div>
            </li>
        </ul>
    )
}
