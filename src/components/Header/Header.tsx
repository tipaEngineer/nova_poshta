import React from 'react';
import { Banner } from './components/Banner';
import { HeaderElements } from './components/HeaderElements/HeaderElements';
import { HeaderStyle } from './HeaderStyle';

export const Header: React.FC = () => {
    return (
        <HeaderStyle.WrappedHeader>
            <Banner />
            <HeaderElements />
        </HeaderStyle.WrappedHeader>
    );
};
