import { Logo } from 'app/components/Logo';
import React from 'react';
import useWindowDimensions from 'utils/hooks/useWindowDimensions';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LogoImage from "assets/Image.png";

type Props = {}

const useStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 16,
    },
    text: {
        marginTop: 16,
        fontSize: 24,
        letterSpacing: '.5px',
        textAlign: 'center',
        color: "#3C4858"
    }
}))

export const UnsupportedScreen = (props: Props) => {
    const styles = useStyles();
    const { width } = useWindowDimensions();
    return (
        <Box className={styles.root}>
            {/* <Logo /> */}
            <img src={LogoImage} alt="LogoImage" style={{ width: '20%' }} />
            <div className={styles.text}>{`This site doesn't support window width less than 1440`}</div>
            <div className={styles.text}>Your current window size is <span style={{ fontWeight: 'bold' }}>{width}</span>px</div>
        </Box>
    )
}