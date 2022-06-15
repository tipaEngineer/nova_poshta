import React, { useState } from 'react';
import { SubMenu } from './components/SubMenu';
import { MainMenuStyle } from './MainMenuStyle';

export interface MenuProps {
    id: number;
    name: string;
    sub?: Array<string>;
}
export interface MenuItems {
    items: MenuProps[];
}
export const MainMenu: React.FC<MenuItems> = ({ items }) => {
    const [subMenuActive, setActiveSubMenu] = useState(-1);

    return (
        <MainMenuStyle.WrappedMainMenu>
            {items.map((value) => (
                <div
                    tabIndex={value.id}
                    role="menu"
                    key={value.id}
                    onMouseOut={() => setActiveSubMenu(-1)}
                    onBlur={() => setActiveSubMenu(-1)}
                    onFocus={() => {
                        setActiveSubMenu(value.id);
                    }}
                    onMouseOver={() => {
                        setActiveSubMenu(value.id);
                    }}
                >
                    {value.name}
                    {subMenuActive !== value.id ? <></> : <SubMenu items={value.sub} />}
                </div>
            ))}
        </MainMenuStyle.WrappedMainMenu>
    );
};
