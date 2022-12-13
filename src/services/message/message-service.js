const messages = [];

export const getMessages = () => {
    return messages;
}

export const addMessage = (message) => {
    messages.push({
        id: messages.length + 1,
        message
    });
}
