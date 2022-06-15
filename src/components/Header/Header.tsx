import React from 'react';
import { Banner } from './components/Banner';
import { HeaderElements } from './components/HeaderElements/HeaderElements';
import { MainMenu } from './components/MainMenu/MainMenu';
import ItemsMenu from './components/MainMenu/Menu.json';
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
            <HeaderStyle.HeaderElements id={'menu'}>
                <MainMenu items={ItemsMenu} />
            </HeaderStyle.HeaderElements>
        </HeaderStyle.WrappedHeader>
    );
};
