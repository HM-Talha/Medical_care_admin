import { TextField } from 'app/components/TextField';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Mail } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
import { Alert, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

import confusion from '../LoginPage/assets/forgot.png';
import { selectForgotForm } from '../selectors';
import { actions } from '../slice';

type Props = {}

const useStyles = makeStyles(() => ({
    heading: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '19px',
        textAlign: 'center',
        color: '#000',
    },
    subHeading: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '16px',
        color: '#FF923D',
        textAlign: 'center',
        maxWidth: 188
    },
    resetMsgText: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '16px',
        textAlign: 'center',
        color: '#999999',
        marginTop: 4,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 40,
        fontSize: 22,
        marginTop: 11,
    },

    successHeading: {
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        color: '#000',
    },
    iconMail: {
        fontSize: 53,
        color: '#FF923D',
        margin: "30px 0px 30px 0px",
    },
    input: {
        marginTop: 24,
    },
    mailSent: {
        color: '#3C4858',
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 26,
        textAlign: 'center',
        maxWidth: 210,
        lineHeight: '16px',
    },
    descText: {
        fontSize: 14,
        fontWeight: 400,
        textAlign: 'center',
        color: '#999',
        maxWidth: 289
    },
    error: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    }
}))

const ForgotPassword = (props: Props) => {
    const styles = useStyles();
    // const navigate = useNavigate();
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const form = useSelector(selectForgotForm);
    const { email, error } = form;
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState('');
    const { t } = useTranslation();

    const onSuccess = () => {
        setSubmitted(true)
        dispatch(actions.resetError());
        dispatch(actions.resetEmail());
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.forgotPassword({ callback: onSuccess }));
        // navigate('/login/reset-password')
    }

    const handleEmailChange = (e) => {
        const { value } = e.target;
        if (error) {
            dispatch(actions.resetError());
        }
        dispatch(actions.setForgotEmail(value));
    }

    const forgotSubmitContent = <>
        <Box className={styles.form} >
            <Box className={styles.successHeading}>
                Reset Password
            </Box >
            <Mail className={styles.iconMail} />
            <Box className={styles.mailSent}>
                A Mail has been send to you  to
                Reset your password
            </Box>
            <div className={styles.descText}>
                Click the reset link sent to your registed email and
                Reset your Password
            </div>
        </Box>
    </>

    useEffect(() => {
        console.log(error, 'error message here')
        if (error) setErrorMsg(t(`login.${error}`))
        // eslint-disable-next-line
    }, [error])

    const forgotForm = (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                {
                    errorMsg && <Alert className={styles.error} severity="error">
                        {errorMsg}
                    </Alert>
                }
                <Box mb={2} className={styles.heading}>
                    Forgot Password ?
                </Box >
                <img src={confusion} alt='forgot_person' />
                <Box className={styles.subHeading} mt={2}>
                    Enter the email address associated with your account.
                </Box>
                <Box className={styles.resetMsgText} mb={1}>
                    We will email you a link to reset your password
                </Box>
                <div dir="ltr" style={{width: '100%'}}>
                    <TextField
                        height={51}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                       
                        type='email'
                        placeholder='Enter Email Address'
                        name="Email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <Button type='submit' className={styles.button} variant='contained' color='secondary'>
                    Send
                </Button>
            </form>
        </>
    )

    return !isSubmitted ? forgotForm : forgotSubmitContent;
}
export default ForgotPassword