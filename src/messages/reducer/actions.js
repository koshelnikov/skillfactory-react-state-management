export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOAD_MESSAGES = 'ADD_MESSAGES';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';

export const loadMessage = () => {
    return {
        type: LOAD_MESSAGES,
        isLoading: true
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



