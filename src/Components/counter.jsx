import React, { useState } from 'react';

const Counter = (props) => {

    const [value, setValue] = useState(props.value);

    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    }

    const getBageClasses = () => {
        let classes = 'rounded-sm p-2 text-white mx-2 ';
        classes += value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    };

    const handleIncrement = () => {
       setValue((prevState) => prevState + 1);
    };

    const handleDecrement = () => {
        setValue((prevState) => prevState > 0 ? prevState - 1 : 0);
     };

    
    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={() => props.onDelete(props.id)}>Удалить</button>
        </div>
    );
};

export default Counter;