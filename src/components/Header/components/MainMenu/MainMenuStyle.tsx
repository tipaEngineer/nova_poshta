import styled from 'styled-components';

export const MainMenuStyle = {
    WrappedMainMenu: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5px;
        padding: 5px;
        border-top: #ff392e 5px solid;
    `,
    WrappedItemElement: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-grow: 0;
        flex-wrap: wrap;
        flex-shrink: 1;
        order: 1;
    `,
};
