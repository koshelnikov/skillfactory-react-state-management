import {Link} from "react-router-dom";
import css from './notification.module.css'
import {useMessages} from "../../../messages/context/useMessages";

export const Notifications = () => {
    const {getMessages} = useMessages();
    return (
        <div className={css.notifications}>
            <Link to={'/'}>Dashboard</Link>
            {getMessages().map(item => {
                return (
                    <div key={item.id}>{item.message}</div>
                )
            })}

            <span>Notifications </span>
        </div>
    )
}
