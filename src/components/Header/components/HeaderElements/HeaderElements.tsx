import React from 'react';
import { StyledHeaderElement } from './HeaderElementStyle';
import { Logo } from './components/Logo';
import { Autorization } from './components/Autorization';
import { SearchModule } from './components/SearchModule';
import { HeaderStyle } from '../../HeaderStyle';
import { TechnikalSupport } from './components/TechnikalSupport';

export const HeaderElements: React.FC = () => {
    return (
        <HeaderStyle.HeaderItem>
            <StyledHeaderElement.WrappedHeaderElement>
                <Logo />
                <Autorization />
                <SearchModule />
                <TechnikalSupport />
            </StyledHeaderElement.WrappedHeaderElement>
        </HeaderStyle.HeaderItem>
    );
};
