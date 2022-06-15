import React from 'react';

interface SubMenuItems {
    items?: string[];
}

export const SubMenu: React.FC<SubMenuItems> = ({ items }) => {
    return (
        <div>
            <ul>
                {items?.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
};
