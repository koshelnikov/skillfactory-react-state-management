import {addMessage, loadMessage, markAsRead} from "../actions";
import {takeEvery, put, call} from 'redux-saga/effects';
import {MessageService} from "../../../services/message/message.service";
import {REQUEST_GET_MESSAGE, REQUEST_MARK_MESSAGE_AS_READ} from "./actions";

function* loadMessageAsync () {
    const messageService = new MessageService();
    yield put(loadMessage());
    const message = yield call(() => messageService.getMessage());
    yield put(addMessage(message.id, message.message))
}

function* markMessageAsReadAsync(action) {
    const messageService = new MessageService();
    const id = yield call(() => messageService.markAsRead(action.id));
    yield put(markAsRead(id));
}

export default function* rootSaga() {
    yield takeEvery(REQUEST_GET_MESSAGE, loadMessageAsync)
    yield takeEvery(REQUEST_MARK_MESSAGE_AS_READ, markMessageAsReadAsync)
};