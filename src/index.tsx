import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ItemsMenu from './components/Header/components/MainMenu/Menu.json';
import { MainMenu } from './components/Header/components/MainMenu/MainMenu';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log(ItemsMenu);
console.log(ItemsMenu[0]);

root.render(
    <React.StrictMode>
        <App />
        <MainMenu items={ItemsMenu} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
