import css from './notifications.module.css'
import {useMessages} from "../../../messages/context/useMessages";

export const Notifications = ({visible}) => {
    const {getMessages, markAsRead} = useMessages();

    return (
        <div className={`${css.notifications} ${visible ? '' : css.hide}`} onClick={e => e.stopPropagation()}>
            {getMessages().map(item => {
                return <div key={item.id}
                            className={item.isRead ? css.read : ''}
                            onClick={() => markAsRead(item.id)}>
                    {item.message}
                </div>
            })}
        </div>
    )
}
