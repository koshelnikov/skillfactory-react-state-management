const {markAsRead} = require("../redux/actions");
const {addMessage} = require("../redux/actions");
const {requestGetMessage} = require("../redux/actions");
const {MessageService} = require("../../services/message/message.service");


export const getMessage = () =>
    (dispatch) => {
        const messageService = new MessageService();
        dispatch(requestGetMessage());
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
