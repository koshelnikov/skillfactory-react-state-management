import {addMessage} from "../../../../services/message/message-service";
import css from './message-form.module.css'
import {createRef} from "react";
export const MessageForm = () => {

    const inputRef = createRef();

    const sendMessage = () => {
        addMessage(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <div className={css.messageForm}>
            <input ref={inputRef} />
            <button onClick={() => sendMessage()}>Send Message</button>
        </div>
    )
}


