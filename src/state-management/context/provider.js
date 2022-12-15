import {createContext, useCallback, useState} from "react";

export const MessagesContext = createContext(null);

export const MessagesProvider = (props) => {
    const [messages, setMessages] = useState([])

    const addMessage = (id, message) =>
        setMessages([
            ...messages,
            {id, message, isRead: false}
        ])


    const markAsRead = (id) =>
        setMessages(
            messages.map(item => {
                if (item.id === id) {
                    item.isRead = !item.isRead;
                }
                return item;
            })
        );


    const context = {
        messages,
        addMessage,
        markAsRead

    }

    return <MessagesContext.Provider value={context}>{props.children}</MessagesContext.Provider>

}
