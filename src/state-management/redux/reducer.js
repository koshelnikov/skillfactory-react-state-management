import {ADD_MESSAGE, MARK_MESSAGE_AS_READ, LOAD_MESSAGE} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_MESSAGE:
            return {
                ...state,
                isLoading: true
            }
        case ADD_MESSAGE:
            return {
                messages: [...state.messages, {id: action.id, message: action.message}],
                isLoading: false
            }
        case MARK_MESSAGE_AS_READ:
            return {
                ...state,
                messages: state.messages.map(item => {
                    if (item.id === action.id) {
                        item.isRead = !item.isRead;
                    }
                    return item;
                }),
            }

        default:
            return state
    }
}

export default reducer;
