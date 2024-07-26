import React from 'react';

interface ButtonProps {
    type: "button" | "submit" | "reset";
    label: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({type, label, className}) => (
    <button type={type} className={`btn ${className}`}>
        {label}
    </button>
);

export default Button;