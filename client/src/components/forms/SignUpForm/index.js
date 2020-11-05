import React, {useCallback, Fragment} from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {ROLES} from '../../../constants';
import styles from './SignUpForm.module.sass';
import RoleInput from '../../RoleInput/RoleInput';

const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: ``,
    password: '',
    confirmPassword: '',
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
                    <div className={styles.wrapper}>
                        <Field name="firstName"
                               placeholder="First name"
                               className={styles.input}/>
                        <ErrorMessage name="firstName" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="lastName"
                               placeholder="Last name"
                               className={styles.input}/>
                        <ErrorMessage name="lastName" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="displayName"
                               placeholder="Display name"
                               className={styles.input}/>
                        <ErrorMessage name="displayName" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="email"
                               placeholder="Email"
                               className={styles.input}/>
                        <ErrorMessage name="email" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="password"
                               placeholder="Password"
                               className={styles.input}/>
                        <ErrorMessage name="password" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.wrapper}>
                        <Field name="confirmPassword"
                               placeholder="Password confirmation"
                               className={styles.input}/>
                        <ErrorMessage name="confirmPassword" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.choseRoleContainer}>
                        <Field
                            className={styles.input}
                            name="role"
                            type="radio"
                            value={ROLES.CUSTOMER}
                            strRole="Join As a Buyer"
                            infoRole="I am looking for a Name, Logo or Tagline for my business, brand or product."
                            component={RoleInput}
                            id={ROLES.CUSTOMER}
                        />
                        <Field
                            className={styles.input}
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
                        <p>By clicking this button, you agree to our <a href="https://www.google.com" target="_blank">Terms
                            of Service</a>.
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
