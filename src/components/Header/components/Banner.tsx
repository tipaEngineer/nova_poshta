import React from 'react';
import img_header from '../../../assets/header_img.jpg';
import { Styled_Banner } from './BannerStyle';

export const Banner: React.FC = () => {
    return (
        <Styled_Banner.BannerItem>
            <a href="https://novaposhta.ua/npbravery/">
                <img src={img_header} alt="Відправляй любов" />
            </a>
        </Styled_Banner.BannerItem>
    );
};
