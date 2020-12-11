import React, { useCallback, useLayoutEffect, useState } from 'react';
import styles from './RecoverPassword.module.sass';
import CONSTANTS from '../../constants';
import { Link, useLocation } from 'react-router-dom';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Footer from '../../components/Footer/Footer';
import ConfirmPasswordByLink from '../../components/forms/RecoverPassword/ConfirmPasswordByLink';

const RecoverPassword = () => {
  const [isForgot, setIsForgot] = useState();
  const location = useLocation();
  const pageTitle = isForgot ? 'Forgot Password' : 'Password change confirmation';

  useLayoutEffect(() => {
    setIsForgot(location.pathname === '/forgot_password');
  }, [location.pathname]);

  const tokenValue = location.pathname.split('/')[2];

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
            <h2>{pageTitle}</h2>
            {isForgot ? <ForgotPasswordForm/> : <ConfirmPasswordByLink value={tokenValue}/>}
          </div>
        </div>
      </section>
      <GetInTouch/>
      <Footer/>
    </>
  );
};

export default RecoverPassword;
