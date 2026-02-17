import React from 'react';
import { openWhatsApp } from '../helpers/whatsapp';

const Button = ({ children, serviceName, onClick, className = '' }) => {
    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (serviceName) openWhatsApp(serviceName);
    };

    return (
        <button
            onClick={handleClick}
            className={`
        btn-primary
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default Button;
