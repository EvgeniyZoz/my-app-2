import React, {useState} from 'react';
import Counter from "./counter";

const СountersList = () => {
    const [counters, setCounters] = useState([
        {id : 0, value: 0, name:'Ложка'},
        {id : 1, value: 4, name:'Тарелка'},
        {id : 2, value: 0, name:'Вилка'}
    ]);
    
    const handleDelete = (id) => {
        console.log('handleDelete', id);
        const newCounters = counters.filter(c => c.id !== id); 
        setCounters(newCounters);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete} />
            ))}
        </>
    )
};

export default СountersList;


