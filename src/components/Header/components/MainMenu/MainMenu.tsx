import React from 'react';

export interface MenuProps {
    id: number;
    name: string;
    sub?: Array<string>;
}
export interface MenuItems {
    items: MenuProps[];
}
export const MainMenu: React.FC<MenuItems> = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((value) => (
                    <li key={value.id}>{value.name}</li>
                ))}
            </ul>
        </div>
    );
};
