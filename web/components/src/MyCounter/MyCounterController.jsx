import React from 'react'
import { useEffect, useRef, useState } from 'react'

const MyCounterController = (props) => {
    const [count, setCount] = useState(props.initValue);
    const [intervalId, setIntervalId] = useState(0);

    const incrementRef = useRef();

    useEffect(() => {
        console.log('useEffect send', count);
        props.updateCount(count);
    }, [count]);

    const increment = () => {
        const newValue = count + 1;
        console.log('increment value ', count, ' to ', newValue);
        setCount(newValue);
    };
    incrementRef.current = increment;

    const handleClick = () => {
        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
        const tick = () => {
            // increment();
            incrementRef.current();
        }
        const newIntervalId = setInterval(tick, 1000);
        setIntervalId(newIntervalId);
    };

    return(
        <div>
            <button onClick={handleClick}>{intervalId ? 'Stop counting' : 'Start counting'}</button>
        </div>
    );

}

export default MyCounterController