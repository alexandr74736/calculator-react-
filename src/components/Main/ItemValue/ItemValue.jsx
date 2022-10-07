import React from 'react';
import css from './ItemValue.module.css';

const ItemValue = (props) => {
    let rub = '₽'
    if (props.val === '') {
        rub = '';
    }
    return (
        <div className={css.item}>
            <div className={css.item__title}>
                <p>{props.title}</p>
            </div>
            <div className={css.item__content}>
                <p>{props.val} {rub}</p>
            </div>
        </div>
    )
}

export default ItemValue;