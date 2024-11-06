import React from 'react';
import PropTypes from 'prop-types';
import './button1.css';

const Button1 = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
};

Button1.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Button1;