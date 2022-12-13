export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';

const addMessage = (id, message) => {
    return {
        type: ADD_MESSAGE,
        id,
        message,
        isRead: false
    }
}

const markAsRead = (id) => {
    return {
        type: MARK_MESSAGE_AS_READ,
        id
    }
}



