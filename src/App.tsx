import React from 'react';
import { Styled } from './AppStyle';
import { Header } from './components/Header/Header';

function App() {
    return (
        <Styled.App>
            <div>Hello world</div>
            <Header />
        </Styled.App>
    );
}

export default App;
