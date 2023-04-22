export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';


export const loadMessage = () => {
    return {
        type: LOAD_MESSAGE,
        isLoading: true
    }
}

export const addMessage = (id, message) => {
    return {
        type: ADD_MESSAGE,
        id,
        message
    }
}

export const markAsRead = (id) => {
    return {
        type: MARK_MESSAGE_AS_READ,
        id
    }
}
