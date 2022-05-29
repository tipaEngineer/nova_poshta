import React from 'react';
import img_header from '../../../assets/header_img.jpg';

export const Banner: React.FC = () => {
    return (
        <div>
            <a href="https://novaposhta.ua/npbravery/">
                <img src={img_header} alt="Відправляй любов" />
            </a>
        </div>
    );
};
