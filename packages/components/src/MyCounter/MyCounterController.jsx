import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

MyCounterController.propTypes = {
    initValue: PropTypes.node.any,
    updateCount: PropTypes.node.any
};
    

const MyCounterController = (props) => {
    const [count, setCount] = useState(props.initValue);
    const [intervalId, setIntervalId] = useState(0);

    const incrementRef = useRef();
    const updateCounterRef= useRef();
    updateCounterRef.current = props.updateCount;

    useEffect(() => {
        //console.log('useEffect send', count);
        updateCounterRef.current(count);
    }, [count]);

    const increment = () => {
        const newValue = count + 1;
        //console.log('increment value ', count, ' to ', newValue);
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
        };
        const newIntervalId = setInterval(tick, 1000);
        setIntervalId(newIntervalId);
    };

    return(
        <div>
            <button onClick={ handleClick }>{ intervalId ? 'Stop counting' : 'Start counting' }</button>
        </div>
    );

};

export default MyCounterController;
