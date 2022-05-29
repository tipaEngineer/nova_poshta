import React from 'react';
import { AutorizationStyle } from './AutorizationStyle';

export const Autorization: React.FC = () => {
    return (
        <div>
            <AutorizationStyle.LinkDekoration>
                <a href="https://new.novaposhta.ua/">
                    <span>Вхід</span>
                </a>
            </AutorizationStyle.LinkDekoration>
            <> і </>
            <AutorizationStyle.LinkDekoration>
                <a href="https://new.novaposhta.ua/">
                    <span>реєстрація</span>
                </a>
            </AutorizationStyle.LinkDekoration>
        </div>
    );
};
