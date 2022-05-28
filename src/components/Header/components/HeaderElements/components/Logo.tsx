import React from 'react';
import NP_logo from '../../../../../assets/NP_Logo.png';
import { StyledHeaderElement } from '../HeaderElementStyle';

export const Logo: React.FC = () => {
    return (
        <StyledHeaderElement.HeaderElementItem>
            <div>
                <img src={NP_logo} alt={'Логотоип Нової пошти'} />
            </div>
        </StyledHeaderElement.HeaderElementItem>
    );
};
