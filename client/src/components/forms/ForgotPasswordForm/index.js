import React, {useCallback} from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import styles from './ForgotPasswordForm.module.sass'

const initialValues = {
    email: '',
    password: '',
};

const passwordRule = [
    /(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])^.{8,255}$/,
    'Your password must be at least 8 characters, and include at least one lowercase letter, one uppercase letter, and a number. ',
];

const validationSchema = Yup.object({
    email: Yup.string().trim().email().required(),
    password: Yup.string()
        .matches(...passwordRule)
        .required('This field is required'),
});

function ForgotPasswordForm(props) {
    const { onSubmit } = props;

    const handleSubmit = useCallback(
        (values, formikBag) => {
            onSubmit(values);
        },
        [onSubmit]
    );

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form className={styles.form}>
                    <div className={styles.field}>
                        <Field name="email"
                               placeholder="Enter your email address"
                               className={styles.input}/>
                        <ErrorMessage name="email" component="span" className={styles.error}/>
                    </div>
                    <div className={styles.field}>
                        <Field name="password"
                               type="password"
                               placeholder="Enter new password"
                               className={styles.input}/>
                        <ErrorMessage name="password" component="span" className={styles.error}
                                      title="Your password must be at least 8 characters, and include at least one
                                      lowercase letter, one uppercase letter, and a number."/>
                    </div>

                    <button type="submit" className={styles.submit}>Get password</button>
                </Form>
            )}
        </Formik>
    );
}

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
