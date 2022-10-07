import React from 'react';
import css from './Main.module.css';

import ItemSlider from './ItemSlider/ItemSlider';
import ItemValue from './ItemValue/ItemValue';

const Main = (props) => {
    const btnSend = React.createRef();
    const submit = () => {
        props.isDisabled(true)
        props.postRequest()
    }
    return (
        <div className={css.main}>
            <div className={css.main__sliders}>
                <ItemSlider
                    state={props.state}
                    title='Стоимость автомобиля'
                    item={props.state.items[0]}
                    additional='₽'
                    changeValue={props.changeValue}
                    focusedValue={props.focusedValue}
                />
                <ItemSlider
                    state={props.state}
                    title='Первоначальный взнос'
                    item={props.state.items[1]}
                    additional='%'
                    changeValue={props.changeValue}
                    focusedValue={props.focusedValue}
                />
                <ItemSlider
                    state={props.state}
                    title='Срок лизинга'
                    item={props.state.items[2]}
                    additional='мес.'
                    changeValue={props.changeValue}
                    focusedValue={props.focusedValue}
                />
            </div>
            <div className={css.main__values}>
                <ItemValue title='Сумма договора лизинга' val={props.state.leasAmount}/>
                <ItemValue title='Ежемесячный платёж от' val={props.state.monthPay}/>
                <div className={css.values__btn}>
                    <button 
                        className={css.btn} 
                        onClick={submit} 
                        ref={btnSend} 
                        disabled={props.state.disabledStatus}
                    >
                    Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;