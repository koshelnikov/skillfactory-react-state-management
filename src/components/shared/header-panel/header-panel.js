import css from './header-panel.module.css';
import MessageIcon from '../../../assets/icons/message.svg';
import {Budget} from "./budget/budget";


export const HeaderPanel = ({title, unreadMessagesCounter}) => {

    return (
        <div className={css.headerPanel}>
            <div className={css.headerPanelTitle}>{title}</div>
            <ul>
                <li className={css.headerNav}><a href={'/'}>Context</a></li>
                <li className={css.headerNav}><a href={'/redux'}>Redux</a></li>
                <li className={css.headerNav}><a href={'/redux-thunk'}>Redux Thunk</a></li>
                <li className={css.headerNav}><a href={'/redux-saga'}>Redux Saga</a></li>

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
