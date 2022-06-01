import React, { useState } from 'react';

export const AboutCompanyMenu: React.FC = () => {
    const [isActive, setActive] = useState(true);
    const subMenu = [
        'Новини компанії',
        'Кодекс корпоративної етики',
        'Інвесторам',
        'Нова Пошта сьогодні',
        'Нова Пошта у світі',
        'Партнерство',
        'Сталий розвиток',
        'Школа бізнесу',
        'Робота в компанії',
        'Постачальникам',
        'Прес-центр',
        'Фінансовий сервіс NovaPay',
    ];
    const AllMenu: any = [];
    if (isActive) {
        AllMenu.push(<li>Menu</li>);
    } else {
        subMenu.forEach((value) => {
            AllMenu.push(<li>{value}</li>);
        });
    }
    return (
        <div
            onMouseOver={() => {
                setActive(!isActive);
            }}
        >
            <ul>Menu</ul>
            {AllMenu}
        </div>
    );
};
