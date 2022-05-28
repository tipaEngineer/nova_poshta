import React from 'react';
import { StyledHeaderElement } from './HeaderElementStyle';
import { Logo } from './components/Logo';
import { Autorization } from './components/Autorization';
import { SearchModule } from './components/SearchModule';
import { HeaderStyle } from '../../HeaderStyle';

export const HeaderElements: React.FC = () => {
    return (
        <HeaderStyle.HeaderItem>
            <StyledHeaderElement.WrappedHeaderElement>
                <Logo />
                <Autorization />
                <SearchModule />
            </StyledHeaderElement.WrappedHeaderElement>
        </HeaderStyle.HeaderItem>
    );
};
