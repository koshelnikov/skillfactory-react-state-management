export const REQUEST_GET_MESSAGE = 'REQUEST_GET_MESSAGE';
export const REQUEST_MARK_MESSAGE_AS_READ = 'REQUEST_MARK_MESSAGE_AS_READ';

export const requestGetMessage = () => {
    return {
        type: REQUEST_GET_MESSAGE
    }
}

export const requestMarkMessageAsRead = (id) => {
    return {
        type: REQUEST_MARK_MESSAGE_AS_READ,
        id
    }
}
