import css from './messages.module.css';

export const Messages = ({messages, onMessageClick}) => {
    return (
        <div className={css.messages}>
            <h1>Messages</h1>
            {messages.map(item => {
                return (
                    <div className={`${css.notification} ${item.isRead ? css.notificationRead : ''}`}
                         key={item.id}
                         onClick={() => onMessageClick(item)}>
                        {item.message}
                    </div>
                )
            })}
        </div>
    )
}

