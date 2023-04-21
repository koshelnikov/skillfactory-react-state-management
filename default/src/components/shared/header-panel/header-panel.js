import css from './header-panel.module.css';
import MessageIcon from '../../../assets/icons/message.svg';
import {Budget} from "./budget/budget";


export const HeaderPanel = ({title, unreadMessagesCounter}) => {

    return (
        <div className={css.headerPanel}>
            <div className={css.headerPanelTitle}>{title}</div>
            <ul>
                <li className={css.headerNav}><a href={'/'}>Context</a></li>
                <li className={css.headerNav}><a href={'/react-redux-connect'}>Redux Connect</a></li>
                <li className={css.headerNav}><a href={'/react-redux-hooks'}>Redux Hooks</a></li>
                <li className={css.headerNav}><a href={'/react-redux-hooks-thunk'}>Redux Thunk</a></li>
                <li className={css.headerNav}><a href={'/react-redux-hooks-saga'}>Redux Saga</a></li>

                <li className={css.headerNav}>
                    <div>
                        <img src={MessageIcon} />
                        {
                            unreadMessagesCounter > 0 &&
                            <Budget className={css.messageBudget} value={unreadMessagesCounter}/>
                        }
                    </div>
                </li>
            </ul>
        </div>
    )
}
