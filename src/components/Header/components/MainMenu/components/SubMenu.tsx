import React from 'react';

interface SubMenuItems {
    items?: string[];
}

export const SubMenu: React.FC<SubMenuItems> = ({ items }) => {
    return (
        <div>
            {items?.map((value, index) => (
                <div key={index}>{value}</div>
            ))}
        </div>
    );
};
