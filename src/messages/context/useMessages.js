import {createContext, useContext, useEffect, useState} from "react";

const MessagesContext = createContext(null);

export const MessagesProvider = (props) => {
    const [messages, setMessages] = useState([])

    const addMessage = (id, message) => setMessages([...messages, {
        id, message, isRead: false
    }])

    useEffect(() => {
        if (messages.length < 10) {
            const time = Math.floor(Math.random() * 5000) + 1000;
            const interval = setInterval(() => {
                const id = messages.length + 1;
                addMessage(id, `${id} message`);
            }, time)

            return () => clearInterval(interval);
        }
    }, [messages]);


    const context = {
        messages,
        getMessages: () => [...messages].sort((a, b) => b.id - a.id),
        addMessage,
        markAsRead: (id) => {
            setMessages([
                ...messages.map(item => {
                    if (item.id === id) {
                        item.isRead = !item.isRead;
                    }

                    return item;
                })
            ])
        }

    }

    return <MessagesContext.Provider value={context}>{props.children}</MessagesContext.Provider>

}


export const useMessages = () => {
    return useContext(MessagesContext);
}
