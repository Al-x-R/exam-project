import React, {useCallback, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect, useLocation} from 'react-router-dom';
import {loginRequest, signUpRequest} from '../../actions/authActionCreators';
import SignInForm from '../../components/forms/SignInForm';
import SignUpForm from '../../components/forms/SignUpForm';
import {userSelector} from '../../selectors';
import styles from './AuthPage.module.sass'
import logo from './logo.png'

function AuthPage() {
    const [isLogin, setIsLogin] = useState();
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const location = useLocation();

    useLayoutEffect(() => {
        setIsLogin(location.pathname === '/login');
    }, [location.pathname]);

    const Form = isLogin ? SignInForm : SignUpForm;
    const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT';

    const handleSubmit = useCallback(
        values => {
            dispatch(isLogin ? loginRequest(values) : signUpRequest(values));
        },
        [isLogin],
    );

    if (user) {
        return <Redirect to={'/'}/>;
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                    <Link to='/' className={styles.brand}>
                        <img src={logo} alt="Logo"/>
                    </Link>
                    {
                        isLogin ?
                            <Link className={styles.loginBtn} to='/signup'>
                                Signup
                            </Link> :
                            <Link className={styles.loginBtn} to='/login'>
                                Login
                            </Link>
                    }
            </header>
            <section className={styles.pageContent}>
                <h1 className={styles.pageTitle}>{pageTitle}</h1>
                {!isLogin && <p className={styles.pageDescription}>We always keep your name and email address private.</p>}
                <Link to={isLogin ? '/signup' : '/login'}>
                </Link>
                <Form onSubmit={handleSubmit}/>
            </section>
        </div>
    );
}

export default AuthPage;
