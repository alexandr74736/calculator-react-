import React from 'react';
import css from './ItemSlider.module.css';
import Slider from '../Slider/Slider';

const ItemSlider = (props) => {

    let values = props.item.values;
    const initPay = props.item.initialPayment
    let additional = props.additional
    const newValueElement = React.createRef();
    
    const onValueFocus = () => {
        const focusedValue = newValueElement.current.value;
        props.focusedValue(focusedValue)
        return newValueElement.current.value = ''
    }

    const onValueBlur = () => {
        if (props.state.focusedValue < props.item.min) {
            newValueElement.current.value = props.item.min
            props.changeValue(props.item.id - 1, props.item.min)
        } else {
            newValueElement.current.value = props.state.focusedValue
            props.changeValue(props.item.id - 1, props.state.focusedValue)
        }
    }

    const onValueChange = () => {
        const value = newValueElement.current.value;
        onValueFocus()
        props.changeValue(props.item.id - 1, value)
    }

    if (props.item.id === 2) {
        additional = '₽'
    }

    return (
        <div className={css.item}>
            <div className={css.item__title}>
                <p>{props.title}</p>
            </div>
            <fieldset className={css.item__content} disabled={props.state.disabledStatus}>
                <input
                    className={css.item__count}
                    ref={newValueElement}
                    value={values}
                    min={props.item.min}
                    max={props.item.max}
                    onFocus={onValueFocus}
                    onChange={onValueChange}
                    onBlur={onValueBlur}
                />
                <div className={css.item__additonal}>{initPay}{additional}</div>
                <div className={css.item__slider}>
                    <Slider
                        state={props.state}
                        className={css.slider}
                        item={props.item}
                        changeValue={props.changeValue}
                    />
                </div>
            </fieldset>
        </div>
    )
}

export default ItemSlider;