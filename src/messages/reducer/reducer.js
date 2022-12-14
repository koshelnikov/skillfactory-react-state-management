import {ADD_MESSAGE, MARK_MESSAGE_AS_READ} from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, {id: action.id, message: action.message}]
        case MARK_MESSAGE_AS_READ:
            return state.map(item => {
                if (item.id === action.id) {
                    item.isRead = !item.isRead;
                }
                return item;
            })
        default:
            return state
    }
}

export default reducer;
