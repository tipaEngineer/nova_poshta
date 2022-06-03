import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AboutCompanyMenu } from './components/Header/components/MainMenu/AboutCompanyMenu';
import { MainMenu } from './components/Header/components/MainMenu/MainMenu';
import MenuIte from './components/Header/components/MainMenu/Menu.json';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log(MenuIte);

root.render(
    <React.StrictMode>
        <App />
        <div id={'sdsdsds'}>
            <AboutCompanyMenu />
            <MainMenu name={MenuIte[1].name} id={MenuIte[0].id} />
        </div>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
