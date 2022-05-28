import React from 'react';

import { StyledHeaderElement } from '../HeaderElementStyle';

export const Autorization: React.FC = () => {
    return (
        <StyledHeaderElement.HeaderElementItem>
            <div>
                <a href="https://new.novaposhta.ua/">
                    <span>Вхід</span>
                </a>

                <> і </>
                <a href="https://new.novaposhta.ua/">
                    <span>реєстрація</span>
                </a>
            </div>
        </StyledHeaderElement.HeaderElementItem>
    );
};
