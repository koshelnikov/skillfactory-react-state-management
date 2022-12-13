const messages = [];

export const getMessages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(messages)
        }, 1000);
    })
}

export const addMessages = (message) => {
    return new Promise((res) => {
        setTimeout(() => {
            messages.push(message);
        }, 1000);
    })
}
