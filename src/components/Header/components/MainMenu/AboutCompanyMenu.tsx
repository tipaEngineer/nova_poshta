import React, { useState } from 'react';
const SubMenu = [
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
export const AboutCompanyMenu: React.FC = () => {
    const [isOnMenu, setOnMenu] = useState(false);

    const onMouseMenuHadler = () => {
        setOnMenu(!isOnMenu);
    };

    const Menu = (SubMenu) => {
        let menuArray: Array<JSX.Element> = [] 
        if !isOnMenu
    };
    return <></>;
};
