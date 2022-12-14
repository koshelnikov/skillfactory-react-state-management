import css from './root.module.css'
import {HeaderPanel} from "../../header-panel/header-panel";
import {useMessages} from "../../../messages/context/useMessages";

export const Root = () => {

    const {getMessages, markAsRead} = useMessages();

    return (
    <>
        <HeaderPanel/>
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.notifications}>
                    {getMessages().map(item => {
                        return (
                            <div className={`${css.notification} ${item.isRead ?  css.notificationRead : ''}`} key={item.id} onClick={() => markAsRead(item.id)}>{item.message}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    )

}
