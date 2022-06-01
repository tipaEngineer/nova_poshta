import React from 'react';
import { StyledHeaderElement } from './HeaderElementStyle';
import { Logo } from './components/Logo';
import { Autorization } from './components/Autorization';
import { SearchModule } from './components/SearchModule';

import { TechnikalSupport } from './components/TechnikalSupport';

export const HeaderElements: React.FC = () => {
    return (
        <StyledHeaderElement.WrappedHeaderElement id="WrappedHeaderElement">
            <Logo />

            <StyledHeaderElement.HeaderElementItem>
                <StyledHeaderElement.WrappedLogoSearchSupportElements id="WrappedLogoSearchSupportElements">
                    <Autorization />
                    <SearchModule />
                    <TechnikalSupport />
                </StyledHeaderElement.WrappedLogoSearchSupportElements>
            </StyledHeaderElement.HeaderElementItem>
        </StyledHeaderElement.WrappedHeaderElement>
    );
};
