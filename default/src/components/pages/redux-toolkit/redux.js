import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {Messages} from "../../shared/messages/messages";
import {store} from "../../../state-management/reduxt-toolkit/store";
import {addMessage, loadMessage, markAsRead} from "../../../state-management/reduxt-toolkit/messages";

const Index = () => {
    const messages = useSelector((store) => store.messages.messages)
    const isLoading = useSelector((store) => store.messages.isLoading)
    const dispatch = useDispatch();
    const [messageService] = useState(new MessageService());


    useEffect(() => {
        console.log(isLoading, messages.length)

        if (!isLoading && messages.length < 5) {
            dispatch(loadMessage());
            messageService.getMessage()
                .then(item =>
                    dispatch(addMessage({id: item.id, message: item.message})))
        }
    }, [isLoading, messages, messageService])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    return (
        <>
            <HeaderPanel title={'Redux'} unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) => {
                          messageService.markAsRead(item.id)
                              .then(id =>
                                  dispatch(markAsRead(id)));
                      }}
            />
        </>
    )
}


export default () => <Provider store={store}><Index/></Provider>
