import css from './budget.module.css';
export const Budget = ({className, value}) =>
    <div className={`${css.budget} ${className ?? ''}` }>{value}</div>
