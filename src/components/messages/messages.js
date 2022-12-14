import css from '../pages/index.module.css';

export const Messages = ({messages, onMessageClick}) => {
    return (
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.notifications}>
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
            </div>
        </div>
    )
}

