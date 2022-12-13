import css from './header-nav.module.css'

export const HeaderNav = (props) => {
    return (
        <li className={css.headerNav} onClick={() => props.onClick()}>
            {props.children}
        </li>
    )
}
