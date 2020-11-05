import React, {useCallback, Fragment} from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {ROLES} from '../../../constants';
import styles from './SignUpForm.module.sass';
import RoleInput from '../../RoleInput/RoleInput';

const initialValues = {
    firstName: 'Test',
    lastName: 'Testovich',
    displayName: 'teset' + Date.now(),
    email: `test${Date.now()}@gmail.com`,
    password: 'Test12345',
    confirmPassword: 'Test12345',
    role: ROLES.CUSTOMER,
};

const passwordRule = [
    /(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])^.{8,255}$/,
    'Your password must be at least 8 characters, and include at least one lowercase letter, one uppercase letter, and a number. ',
];

const roles = Object.values(ROLES);

const validationSchema = Yup.object({
    firstName: Yup.string().trim().required(),
    lastName: Yup.string().trim().required(),
    displayName: Yup.string().trim().required(),
    email: Yup.string().trim().email().required(),
    password: Yup.string()
        .matches(...passwordRule)
        .required(),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required(),
    role: Yup.string().oneOf(roles).required(),
});

function SignUpForm(props) {
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
            validationSchema={validationSchema}>
            {() => (
                <Form className={styles.form}>
                    <div className={styles.row}>
                        <Field name="firstName" className={styles.input}/>
                        <ErrorMessage name="firstName"/>
                        <Field name="lastName" className={styles.input}/>
                        <ErrorMessage name="lastName"/>
                    </div>
                    <div className={styles.row}>
                        <Field name="displayName" className={styles.input}/>
                        <ErrorMessage name="displayName"/>
                        <Field name="email" className={styles.input}/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className={styles.row}>
                        <Field name="password" className={styles.input}/>
                        <ErrorMessage name="password"/>
                        <Field name="confirmPassword" className={styles.input}/>
                        <ErrorMessage name="confirmPassword"/>
                    </div>
                    <div className={styles.choseRoleContainer}>
                        <Field
                            name="role"
                            type="radio"
                            value={ROLES.CUSTOMER}
                            strRole="Join As a Buyer"
                            infoRole="I am looking for a Name, Logo or Tagline for my business, brand or product."
                            component={RoleInput}
                            id={ROLES.CUSTOMER}
                        />
                        <Field
                            name="role"
                            type="radio"
                            value={ROLES.CREATOR}
                            strRole="Join As a Creative"
                            infoRole="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
                            component={RoleInput}
                            id={ROLES.CREATOR}
                        />
                    </div>
                    <button type="submit" className={styles.submit}>Sign Up</button>
                    <div className={styles.fineprint}>
                        <p>By clicking this button, you agree to our
                            <a href="https://www.google.com" target="_blank"> Terms of Service</a>.
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
