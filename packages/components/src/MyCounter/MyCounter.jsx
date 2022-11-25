import React from "react"
import { useEffect, useRef, useState } from 'react'

// const MyCounter = (props) => {
const MyCounter = ({children, initCount: startValue, updateCount: updateCountValue}) => {
    const [count, setCount] = useState(startValue || 0);
    const [intervalId, setIntervalId] = useState(0);

    const incrementRef = useRef();

    useEffect(() => {
        console.log('send', count);
        if (updateCountValue) {
            updateCountValue(count);
        }
    }, [count]);

    const increment = () => {
        const newValue = count + 1;
        console.log('increment value ', count, ' to ', newValue);
        setCount(newValue);
    };
    incrementRef.current = increment;

    const handleClick = () => {
        if (intervalId) {
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

    return (
        <div>
            <button onClick={handleClick}>{intervalId ? 'Stop counting' : 'Start counting'}</button>
            <div>{children}</div>
        </div>
    );

}

export default MyCounter