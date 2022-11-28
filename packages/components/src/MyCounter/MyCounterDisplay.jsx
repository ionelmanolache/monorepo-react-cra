import PropTypes from 'prop-types';
import React from 'react';

MyCounterDisplay.propTypes = {
    counter: PropTypes.node.any
};

const MyCounterDisplay = (props) => {
    return(
        <div>
            { props.counter }
        </div>
    );
};

export default MyCounterDisplay;
