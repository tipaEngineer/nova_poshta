import styled from 'styled-components';

export const StyledHeaderElement = {
    HeaderElement: styled.div`
        oorder: 0;
        flex: 0 1 auto;
        align-self: stretch;
    `,
    HeaderContainer: styled.div`
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-align-content: space-around;
        -ms-flex-line-pack: distribute;
        align-content: space-around;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    `,
};
