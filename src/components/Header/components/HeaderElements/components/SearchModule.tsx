import React from 'react';

export const SearchModule: React.FC = () => {
    return (
        <div>
            <form>
                <input type={'text'} placeholder={'Пошук по сайту'} />
                <input type={'submit'} />
            </form>
            <a href={'/'}>
                <span>Укр </span>
            </a>

            <a href={'/ru'}>
                <span>Рус </span>
            </a>

            <a href={'en'}>
                <span>En</span>
            </a>
        </div>
    );
};
