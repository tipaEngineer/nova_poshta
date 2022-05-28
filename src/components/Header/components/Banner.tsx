import React from 'react';
import img_header from '../../../assets/header_img.jpg';
import { HeaderStyle } from '../HeaderStyle';

export const Banner: React.FC = () => {
    return (
        <HeaderStyle.HeaderItem>
            <a href="https://novaposhta.ua/npbravery/">
                <img src={img_header} alt="Відправляй любов" />
            </a>
        </HeaderStyle.HeaderItem>
    );
};
