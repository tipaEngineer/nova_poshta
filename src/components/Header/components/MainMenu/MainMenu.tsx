import React from 'react';

export interface ItemMenu {
    id: number;
    name: string;
    sub?: Array<string>;
}

export interface AllMenu {
    allMenu: Array<ItemMenu>;
}

export const MainMenu: React.FC<AllMenu> = ({ allMenu }) => {
    const MENU: JSX.Element[] = [];
    allMenu.forEach((value) => {
        MENU.push(<li key={value.id}>{value.name}</li>);
    });
    return <ul>{MENU}</ul>;
};
