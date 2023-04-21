import {createStore} from "redux";
import reducer from "../../../state-management/redux/reducer";
import {connect, Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {addMessage, loadMessage, markAsRead} from "../../../state-management/redux/actions";
import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {Messages} from "../../shared/messages/messages";

const Index = ({messages, isLoading, loadMessage, addMessage, markAsRead}) => {
    const [messageService] = useState(new MessageService());

    useEffect(() => {

        if (!isLoading && messages.length < 5) {
            loadMessage();
            messageService.getMessage()
                .then(item =>
                    addMessage(item.id, item.message))
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
                                  markAsRead(id));
                      }}
            />
        </>
    )
}

const store = createStore(reducer, {
    messages: [],
    isLoading: false
});

const App = connect(
    (store) => ({
        messages: store.messages,
        isLoading: store.isLoading
    }),
    {loadMessage, addMessage, markAsRead}
)(Index)

export default () => <Provider store={store}><App/></Provider>
