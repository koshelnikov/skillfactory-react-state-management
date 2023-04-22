import {loadMessage} from "../actions";

const {markAsRead} = require("../actions");
const {addMessage} = require("../actions");
const {MessageService} = require("../../../services/message/message.service");


export const getMessage = () =>
    (dispatch) => {
        const messageService = new MessageService();
        dispatch(loadMessage());
        messageService.getMessage()
            .then(
                item => dispatch(addMessage(item.id, item.message)))
    }

export const markMessageAsRead = (id) =>
    (dispatch) => {
        const messageService = new MessageService();
        messageService.markAsRead(id)
            .then(id => dispatch(markAsRead(id)))
    }
