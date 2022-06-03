import React from 'react';

export interface ItemMenu {
    id: number;
    name: string;
}

export interface AllMenu {
    allMenu: [ItemMenu];
}

export const MainMenu: React.FC<ItemMenu> = ({ name, id }) => {
    return (
        <ul>
            <li key={id}>{name}</li>
        </ul>
    );
};
