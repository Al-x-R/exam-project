import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import styles from '../ForgotPasswordForm/ForgotPasswordForm.module.sass';

const ConfirmPasswordByLink = (props) => {
  const { onSubmit, value } = props;

  const handleSubmit = useCallback(
    (values, formikBag) => {
      onSubmit(values);
    },
    [onSubmit],
  );

  const initialValues = {
    token: value,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <button type="submit" className={styles.submit}>OK</button>
        </Form>
      )}
    </Formik>
  );
};

export default ConfirmPasswordByLink;
