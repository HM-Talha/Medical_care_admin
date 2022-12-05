import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
    name: string;
    path: string;
    icon: any;
    isDifferent?: boolean;
    end?: boolean;
};


const useStyles = makeStyles(() => ({
    root: {
        borderRadius: 4,
        textDecoration: "none",
        color: "#3C4858",
        display: "flex",
        alignItems: "center"
    },
    active: {
        borderRadius: 4,
        boxShadow: "0px 4px 4px rgba(239, 99, 40, 0.35)",
        background: "#FF923D",
        color: "#FFF!important",
        "& *": {
            color: "#FFF",
        }
    },
    icon: {
        color: "#3C4858",
        marginRight: 20,
        width: 47,
        background: "transparent"
    },
    wrapper: {
        display: "flex",
        alignItems: "center",
        padding: "20px 30px",
        width: "100%"
    },
    isDifferent: {
        paddingLeft: 17,
    },
    diffIcon: {
        marginRight: 30,
    },
    link: {
        background: "transparent"
    }
}))

const IconOnlyLink = ({ path, icon, isDifferent }: Props) => {
    const styles = useStyles();
    return <NavLink end to={path} className={prop => {
        return clsx({
            [styles.root]: true,
            [styles.active]: prop.isActive
        })
    }}>
        <MenuItem className={clsx({ [styles.wrapper]: true, [styles.isDifferent]: isDifferent, })}>
            <div className={clsx({ [styles.icon]: true, [styles.diffIcon]: isDifferent })}>
                {icon}
            </div>
        </MenuItem>
    </NavLink>
};

export default IconOnlyLink;
