import React from 'react';
import styles from './RecoverPassword.module.sass';
import CONSTANTS from '../../constants';
import {Link} from 'react-router-dom';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

const RecoverPassword = () => {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.logoBlock}>
                        <Link to="/">
                            <img
                                src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}
                                className={styles.logoImg}
                                alt="logo"/>
                        </Link>
                        <div className={styles.tagline}>Collective Wisdom. Real Results.</div>
                    </div>
                    <div className={styles.formBox}>
                        <h2>Forgot Password</h2>
                        <ForgotPasswordForm />
                    </div>

                </div>
            </section>
        </>
    );
};

export default RecoverPassword;
