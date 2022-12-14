import css from './notifications.module.css'
import {useMessages} from "../../../messages/context/useMessages";
import {useDispatch, useSelector} from "react-redux";
import {markAsRead} from "../../../messages/reducer/actions";

export const Notifications = ({visible}) => {
    // 1. Context
    //const {getMessages, markAsRead} = useMessages();

    const messages = useSelector((store) => store);
    const dispatch = useDispatch();


    return (
        <div className={`${css.notifications} ${visible ? '' : css.hide}`} onClick={e => e.stopPropagation()}>
            {messages.map(item =>
                <div key={item.id}
                     className={item.isRead ? css.read : ''}
                     onClick={() => dispatch(markAsRead(item.id))}>
                    {item.message}
                </div>
            )}
        </div>
    )
}
