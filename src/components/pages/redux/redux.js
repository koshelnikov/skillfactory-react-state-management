import {createStore} from "redux";
import reducer from "../../../state-management/redux/reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {addMessage, loadMessage, markAsRead} from "../../../state-management/redux/actions";
import {HeaderPanel} from "../../header-panel/header-panel";
import {Messages} from "../../messages/messages";

const Index = () => {
    const messages = useSelector((store) => store.messages)
    const isLoading = useSelector((store) => store.isLoading)
    const dispatch = useDispatch();
    const [messageService] = useState(new MessageService());

    useEffect(() => {

        if (!isLoading && messages.length < 5) {
            dispatch(loadMessage());
            messageService.getMessage().then(item => dispatch(addMessage(item.id, item.message)))
        }
    }, [isLoading, messages, messageService])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    return (
        <>
            <HeaderPanel unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) => {
                          messageService.markAsRead(item.id).then(id => dispatch(markAsRead(id)));
                      }}
            />
        </>
    )
}

const store = createStore(reducer, {
    messages: [],
    isLoading: false
});


export default () => <Provider store={store}><Index/></Provider>
