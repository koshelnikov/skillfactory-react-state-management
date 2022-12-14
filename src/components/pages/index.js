import css from './index.module.css'
import {HeaderPanel} from "../header-panel/header-panel";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, requestGetMessage, markAsRead, requestMarkMessageAsRead} from "../../messages/redux/actions";
import {useEffect, useState} from "react";
import {MessageService} from "../../services/message/message.service";
import {randomTime} from "../../utils/rand";
import {useMessages} from "../../messages/context/useMessages";
import {getMessage, markMessageAsRead} from "../../messages/redux-thunk/redux-thunk";



export const Index = () => {
    // 1. Context
    //const {messages, markAsRead, addMessage} = useMessages();
    //const [isLoading, setIsLoading] = useState(false);

    // 2. Redux
    const messages = useSelector((store) => store.messages)
    const isLoading = useSelector((store) => store.isLoading)
    const dispatch = useDispatch();
    const [messageService] = useState(new MessageService());

    useEffect(() => {

        if (!isLoading && messages.length < 5) {
            // Synchronous
            // 1. Context
            //setIsLoading(true);
            //messageService.getMessage()
            //    .then(item => {
            //        addMessage(item.id, item.message);
            //        setIsLoading(false);
            //    })

            // 2. Redux
            //dispatch(loadMessage());
            //messageService.getMessage().then(item => dispatch(addMessage(item.id, item.message)))


            // Asynchronus
            // 3. Redux Thunk
            //dispatch(getMessage())

            // 4. Redux Saga
            dispatch(requestGetMessage())
        }
    }, [isLoading, messages, messageService])

    return (
    <>
        <HeaderPanel/>
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.notifications}>
                    {messages.map(item => {
                        return (
                            <div className={`${css.notification} ${item.isRead ?  css.notificationRead : ''}`} key={item.id}
                                 onClick={() => {

                                     // 1. Context
                                     //messageService.markAsRead(item.id).then(id => markAsRead(item.id));

                                     // 2. Redux
                                     //messageService.markAsRead(item.id).then(id => dispatch(markAsRead(id)));

                                     // 3. Redux Thunk
                                     //dispatch(markMessageAsRead(item.id))

                                     // 4. Redux Saga
                                     dispatch(requestMarkMessageAsRead(item.id));

                                 }}>
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
