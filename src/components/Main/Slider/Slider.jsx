import React from 'react';
import css from './Slider.module.css';

const Slider = (props) => {

  const newValueElement = React.createRef();

  const onValueChange = () => {
      const value = newValueElement.current.value;
      props.changeValue(props.item.id - 1, value)
  }

  const item = props.item
  
  return (
    <div className={css.slider}>
      <input 
        type="range" 
        ref={newValueElement} 
        onChange={onValueChange} 
        value={item.values} 
        step={item.step} 
        min={item.min} 
        max={item.max}
        disabled={props.state.disabledStatus}
      />
    </div>
  )
}

export default Slider;