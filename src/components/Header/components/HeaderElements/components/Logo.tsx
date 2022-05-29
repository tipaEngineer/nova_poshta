import React from 'react';
import NP_logo from '../../../../../assets/NP_Logo.png';

export const Logo: React.FC = () => {
    return (
        <div>
            <img src={NP_logo} alt={'Логотоип Нової пошти'} />
        </div>
    );
};
