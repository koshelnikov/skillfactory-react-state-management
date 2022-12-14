import css from './dashboard.module.css';
import {useMessages} from "../../../messages/context/useMessages";

export const Dashboard = () => {
    const {getMessages, markAsRead} = useMessages();
    return (
        <div className={css.notifications}>
            {getMessages().map(item => {
                return (
                    <div className={`${css.notification} ${item.isRead ?  css.notificationRead : ''}`} key={item.id} onClick={() => markAsRead(item.id)}>{item.message}</div>
                )
            })}
        </div>)
}
