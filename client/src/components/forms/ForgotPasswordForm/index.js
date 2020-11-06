import React, {useCallback} from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import styles from './ForgotPasswordForm.module.sass'

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string().trim().email().required(),
    password: Yup.string().required(),
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
                        <Field name="email" className={styles.input}/>
                        <ErrorMessage name="email" />
                    </div>
                    <div className={styles.field}>
                        <Field name="password" className={styles.input}/>
                        <ErrorMessage name="password" />
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
