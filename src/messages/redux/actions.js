export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const REQUEST_GET_MESSAGE = 'REQUEST_GET_MESSAGE';
export const REQUEST_MARK_MESSAGE_AS_READ = 'REQUEST_MARK_MESSAGE_AS_READ';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';


export const loadMessage = () => {
    return {
        type: LOAD_MESSAGE,
        isLoading: true
    }
}
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

export const addMessage = (id, message) => {
    return {
        type: ADD_MESSAGE,
        id,
        message,
        isRead: false,
        isLoading: false
    }
}

export const markAsRead = (id) => {
    return {
        type: MARK_MESSAGE_AS_READ,
        id
    }
}
