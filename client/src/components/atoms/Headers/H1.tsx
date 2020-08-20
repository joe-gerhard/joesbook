import React, { ReactNode } from 'react';
import { StyledH1 } from './styles';

interface H1Props {
    children: ReactNode;
}

const H1 = ({ children }: H1Props) => {
    return <StyledH1>{children}</StyledH1>;
};

export default H1;
