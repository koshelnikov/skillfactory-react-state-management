import css from './root.module.css'
import {HeaderPanel} from "../../header-panel/header-panel";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, markAsRead} from "../../../messages/reducer/actions";
import {useEffect} from "react";

export const Root = () => {
    // 1. Context
    // const {getMessages, markAsRead} = useMessages();
    const messages = useSelector((store) => store)
    const dispatch = useDispatch();

    useEffect(() => {
        if (messages.length < 5) {
            const timeout = Math.floor(Math.random() * 5000) + 1000;
            setTimeout(() => {
                const id = messages.length + 1;
                dispatch(addMessage(id, `Message ${id}`))
            }, timeout);
        }
    }, [messages])

    return (
    <>
        <HeaderPanel/>
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.notifications}>
                    {messages.map(item => {
                        return (
                            <div className={`${css.notification} ${item.isRead ?  css.notificationRead : ''}`} key={item.id}
                                 onClick={() => dispatch(markAsRead(item.id))}>
                                {item.message}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    )

}
