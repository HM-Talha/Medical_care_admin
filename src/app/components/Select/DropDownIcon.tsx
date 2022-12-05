import React from 'react';

type Props = {
    color?: string,
    strokeWidth?: number
};

export const DropDownIcon = ({ color = "#FF923D", strokeWidth = 3, ...rest }: Props) => {
    return <div {...rest}>
        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.22839 1.53613L12.4729 13.3218L23.7174 1.53613" stroke={color} strokeWidth={strokeWidth} />
        </svg>
    </div>;
};
