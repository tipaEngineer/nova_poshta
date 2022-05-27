import React from 'react';
import { AutorizationStyle } from './AutorizationStyle';

export const Autorization: React.FC = () => {
    return (
        <AutorizationStyle.Autorization>
            <div>
                <a href="https://new.novaposhta.ua/">
                    <span>Вхід</span>
                </a>
                <> і </>
                <a href="https://new.novaposhta.ua/">
                    <span>реєстрація</span>
                </a>
            </div>
        </AutorizationStyle.Autorization>
    );
};
