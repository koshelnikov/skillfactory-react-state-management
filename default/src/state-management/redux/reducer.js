import {ADD_MESSAGE, MARK_MESSAGE_AS_READ, LOAD_MESSAGE} from "./actions";
const initialState = {
    messages: [],
    isLoading: false
}

/*

{
 type: string,
 payload: any | number | string | complex object | array
}


 */

const reducer = (state = initialState, action) => {
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
    }


    return state
}

export default reducer;
