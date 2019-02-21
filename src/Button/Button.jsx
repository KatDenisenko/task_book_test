import React from 'react';
import './Button.css'

const Button = ({text, func}) => {
    return (
           <button className = "btn" type="submit" onClick = {func}>{text}</button>
    );
};


export default Button;