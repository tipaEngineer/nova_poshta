import React from 'react';
import { StyledHeaderElement } from './HeaderElementStyle';
import { Logo } from './components/Logo';
import { Autorization } from './components/Autorization';

export const HeaderElements: React.FC = () => {
    return (
        <StyledHeaderElement.HeaderElement>
            <StyledHeaderElement.HeaderContainer>
                <Logo />
                <Autorization />
            </StyledHeaderElement.HeaderContainer>
        </StyledHeaderElement.HeaderElement>
    );
};
