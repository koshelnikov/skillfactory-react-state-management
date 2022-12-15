import {HeaderPanel} from "../../shared/header-panel/header-panel";
import {useMessages} from "../../../state-management/context/useMessages";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {Messages} from "../../shared/messages/messages";
import {MessagesProvider} from "../../../state-management/context/context";

const Index = () => {
    const {messages, markAsRead, addMessage} = useMessages();
    const [isLoading, setIsLoading] = useState(false);
    const [messageService] = useState(new MessageService());

    useEffect(() => {
        if (!isLoading && messages.length < 5) {
            setIsLoading(true);
            messageService.getMessage()
                .then(item => {
                    addMessage(item.id, item.message);
                    setIsLoading(false);
                })
        }
    }, [isLoading, messages, messageService])

    const unreadMessagesCounter = messages.filter(item => !item.isRead).length;

    return (
        <>
            <HeaderPanel title={'Context'} unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) => {
                          messageService.markAsRead(item.id).then(id => markAsRead(item.id))
                      }}
            />
        </>
    )
}

export default () => <MessagesProvider><Index/></MessagesProvider>;

