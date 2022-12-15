import {applyMiddleware, createStore} from "redux";
import reducer from "../../../state-management/redux/reducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {requestGetMessage, requestMarkMessageAsRead} from "../../../state-management/redux/actions";
import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {Messages} from "../../shared/messages/messages";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../../state-management/redux-saga/sagas";

const Index = () => {
    const messages = useSelector((store) => store.messages)
    const isLoading = useSelector((store) => store.isLoading)
    const dispatch = useDispatch();
    const [messageService] = useState(new MessageService());

    useEffect(() => {
        if (!isLoading && messages.length < 5) {
            dispatch(requestGetMessage())
        }

    }, [isLoading, messages, messageService])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    return (
        <>
            <HeaderPanel unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) =>
                          dispatch(requestMarkMessageAsRead(item.id))
                      }
            />
        </>
    )
}


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {
    messages: [],
    isLoading: false
}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default () => <Provider store={store}><Index/></Provider>
