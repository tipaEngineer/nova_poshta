import React, { useState } from 'react';
import { SubMenu } from './components/SubMenu';

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
        <div>
            <ul>
                {items.map((value) => (
                    <div>
                        <li
                            key={value.id}
                            onMouseOut={() => setActiveSubMenu(-1)}
                            onMouseOver={() => {
                                console.log(value.id);
                                setActiveSubMenu(value.id);
                            }}
                        >
                            {value.name}
                        </li>
                        {subMenuActive !== value.id ? <></> : <SubMenu items={value.sub} />}
                    </div>
                ))}
            </ul>
        </div>
    );
};
