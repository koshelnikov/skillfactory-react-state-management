import css from './header-nav.module.css'

export const HeaderNav = (props) => {
    return (
        <li className={css.headerNav} onClick={(e) => {
            e.stopPropagation();
            props.onClick()
        }}>
            {props.children}
        </li>
    )
}
