import React from 'react';
import { StyledHeaderElement } from './HeaderElementStyle';
import { Logo } from './components/Logo';
import { Autorization } from './components/Autorization';
import { SearchModule } from './components/SearchModule';

import { TechnikalSupport } from './components/TechnikalSupport';

export const HeaderElements: React.FC = () => {
    return (
        <StyledHeaderElement.WrappedHeaderElement id="WrappedHeaderElement">
            <StyledHeaderElement.HeaderElementItem>
                <Logo />
            </StyledHeaderElement.HeaderElementItem>
            <StyledHeaderElement.HeaderElementItem>
                <Autorization />
                <SearchModule />
                <TechnikalSupport />
            </StyledHeaderElement.HeaderElementItem>
        </StyledHeaderElement.WrappedHeaderElement>
    );
};
