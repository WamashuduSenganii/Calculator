import React from 'react';
import "./Button.css";

const Button = ({ className, value, onclick }) => {
    return (
        <Button className={className} onclick={onclick}>{value}</Button>
    );
};

export default Button;