import css from './notifications.module.css'
import {Link} from "react-router-dom";

export const Notifications = ({visible}) => {
    return (
        <div className={`${css.notifications} ${visible ? '' : css.hide}`}>
            <Link to={'/notifications'}>показать все</Link>
        </div>
    )
}
