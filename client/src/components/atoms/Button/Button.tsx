import React, { ReactNode } from 'react';
import { StyledButton } from './styles';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: ReactNode;
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    ) => void;
    to?: string;
}

const Button = ({ children, onClick, to }: ButtonProps) => {
    if (to) {
        return (
            <StyledButton as={Link} onClick={onClick} to={to}>
                {children}
            </StyledButton>
        );
    } else {
        return (
            <StyledButton onClick={onClick}>{children}</StyledButton>
        );
    }
};

export default Button;
