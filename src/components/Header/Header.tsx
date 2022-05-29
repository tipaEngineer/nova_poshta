import React from 'react';
import { Banner } from './components/Banner';
import { HeaderElements } from './components/HeaderElements/HeaderElements';
import { HeaderStyle } from './HeaderStyle';

export const Header: React.FC = () => {
    return (
        <HeaderStyle.WrappedHeader>
            <HeaderStyle.HeaderBanner id={'Banner'}>
                <Banner />
            </HeaderStyle.HeaderBanner>
            <HeaderStyle.HeaderElements id={'elements'}>
                <HeaderElements />
            </HeaderStyle.HeaderElements>
        </HeaderStyle.WrappedHeader>
    );
};
