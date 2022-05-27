import React from 'react';
import { Banner } from './components/Banner';
import { HeaderElements } from './components/HeaderElements/HeaderElements';

export const Header: React.FC = () => {
    return (
        <>
            <Banner />
            <HeaderElements />
        </>
    );
};
