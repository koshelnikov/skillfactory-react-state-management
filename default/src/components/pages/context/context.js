import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {useMessages} from "../../../state-management/context/useMessages";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {Messages} from "../../shared/messages/messages";
import {MessagesProvider} from "../../../state-management/context/provider";

const Index = () => {
    const messageService = new MessageService();
    const {messages, markAsRead, addMessage, isLoading, setIsLoading} = useMessages();
    const [markedMessageId, setMarkedMessageId] = useState(null);

    useEffect(() => {
        if (!isLoading && messages.length < 5) {
            setIsLoading(true);
            messageService.getMessage()
                .then(item => {
                    addMessage(item.id, item.message);
                    setIsLoading(false);
                })
        }
    }, [isLoading, messages])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    useEffect(() => {
        if (markedMessageId) {
            markAsRead(markedMessageId)
        }

    }, [markedMessageId])

    return (
        <>
            <HeaderPanel title={'Context'} unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) => {
                          messageService.markAsRead(item.id)
                              .then(id => setMarkedMessageId(id))
                      }}
            />
        </>
    )
}

const OtherComponent = () => {
    const {messages, isLoading} = useMessages();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (messages.length > 3){
            setShowAlert(true);
        }

    }, [messages])

    return (
        <div>
            <div>Other Component</div>
            {showAlert && <span>Messages are more then 10</span>}

            {isLoading && <span>Messages is loading from the server</span>}
        </div>
    )

}

export default () =>
    <MessagesProvider>
        <div>
            <Index/>
            <OtherComponent/>
        </div>
    </MessagesProvider>;

