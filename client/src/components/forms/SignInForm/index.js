import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './SignInForm.module.sass';
import {Link} from 'react-router-dom';

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string().trim().email().required(),
    password: Yup.string().required(),
});

function SignInForm(props) {
    const {onSubmit} = props;

    const handleSubmit = useCallback(
        (values, formikBag) => {
            onSubmit(values);
        },
        [onSubmit],
    );

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form className={styles.loginForm}>
                    <div className={styles.wrapper}>
                        <Field name="email"
                               placeholder="Email address"
                               className={styles.input}/>
                        <ErrorMessage name="email" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="password"
                               type="password"
                               placeholder="Password"
                               className={styles.input}/>
                        <ErrorMessage name="password" component="span" className={styles.error}/>
                    </div>
                    <Link to='/forgot_password' className={styles.forgotPassword}>Forgot Password</Link>
                    <button type="submit" className={styles.submitButton}>Login</button>
                </Form>
            )}
        </Formik>
    );
}

SignInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
