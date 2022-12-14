import css from '../index.module.css';
import {HeaderPanel} from "../../header-panel/header-panel";
import {MessagesProvider, useMessages} from "../../../state-management/context/useMessages";
import {useEffect, useState} from "react";
import {MessageService} from "../../../services/message/message.service";
import {Messages} from "../../messages/messages";

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
            <HeaderPanel unreadMessagesCounter={unreadMessagesCounter}/>
            <Messages messages={messages}
                      onMessageClick={(item) =>
                          messageService.markAsRead(item.id).then(id => markAsRead(item.id))}
            />
        </>
    )
}

export default () => <MessagesProvider><Index/></MessagesProvider>;

