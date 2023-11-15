import React from 'react';
import ButtonMUI from '@mui/material/Button';

const Button = ({
    onClick,
    children,
    variant= 'contained',
    disabled=false,
    ...props
}) => {
    return (
        <ButtonMUI
            onClick={onClick}
            variant={variant}
            {...props}
            className='p-4'
            disabled={disabled}
        >
            {children}
        </ButtonMUI>
    )
}

export default Button;
