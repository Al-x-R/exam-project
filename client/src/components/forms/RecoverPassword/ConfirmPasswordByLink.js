import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import styles from '../ForgotPasswordForm/ForgotPasswordForm.module.sass';

const ConfirmPasswordByLink = (props) => {
  const { onSubmit, value } = props;
  console.log('value ==> ', value)

  const handleSubmit = useCallback(
    (values, formikBag) => {
      onSubmit(values);
    },
    [onSubmit],
  );

  const initialValues = {
    token: value,
  };

  console.log('initialValues ==> ', initialValues)

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
