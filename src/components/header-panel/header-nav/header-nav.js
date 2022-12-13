import classes from './header-nav.module.css'

export const HeaderNav = (props) => {
    return (
        <li className={classes.headerNav}>
            {props.children}
        </li>
    )
}
