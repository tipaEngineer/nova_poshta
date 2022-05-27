import React from 'react';
import NP_logo from '../../../../../assets/NP_Logo.png';
import { LogoStyle } from './LogoStyle';

export const Logo: React.FC = () => {
    return (
        <LogoStyle.Logo>
            <img src={NP_logo} alt={'Логотоип Нової пошти'} />
        </LogoStyle.Logo>
    );
};
