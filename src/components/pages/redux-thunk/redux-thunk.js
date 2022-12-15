import {applyMiddleware, createStore} from "redux";
import reducer from "../../../state-management/redux/reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {addMessage, loadMessage, markAsRead} from "../../../state-management/redux/actions";
import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {Messages} from "../../shared/messages/messages";
import thunk from "redux-thunk";
import {getMessage, markMessageAsRead} from "../../../state-management/redux-thunk/redux-thunk";

const Index = () => {
    const messages = useSelector((store) => store.messages)
    const isLoading = useSelector((store) => store.isLoading)
    const dispatch = useDispatch();
    const [messageService] = useState(new MessageService());

    useEffect(() => {
        if (!isLoading && messages.length < 5) {
            dispatch(getMessage())
        }
    }, [isLoading, messages, messageService])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    return (
        <>
            <HeaderPanel title={'Redux Thunk'} unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={
                          (item) => dispatch(markMessageAsRead(item.id))
                      }
            />
        </>
    )
}

const store = createStore(reducer, {
    messages: [],
    isLoading: false
}, applyMiddleware(thunk));

export default () => <Provider store={store}><Index/></Provider>
