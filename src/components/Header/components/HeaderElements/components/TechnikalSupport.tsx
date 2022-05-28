import React from 'react';
import { StyledHeaderElement } from '../HeaderElementStyle';

export const TechnikalSupport: React.FC = () => {
    return (
        <StyledHeaderElement.HeaderElementItem>
            <div>
                <a href={'/support'}>Центр підтримки клієнтів</a>
            </div>
        </StyledHeaderElement.HeaderElementItem>
    );
};
