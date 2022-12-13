import {Link} from "react-router-dom";
import css from './notification.module.css'

export const Notifications = () => {
    return (
        <div className={css.notifications}>
            <Link to={'/'}>Dashboard</Link>
            <span>Notifications </span>
        </div>
    )
}
