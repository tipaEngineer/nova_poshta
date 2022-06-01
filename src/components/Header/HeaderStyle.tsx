import styled from 'styled-components';

export const HeaderStyle = {
    WrappedHeader: styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    `,
    HeaderBanner: styled.div`
        order: 0;
    `,
    HeaderElements: styled.div`
        order: 1;
    `,
};
