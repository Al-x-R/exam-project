import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import styles from '../ForgotPasswordForm/ForgotPasswordForm.module.sass';
import PropTypes from 'prop-types';

const ConfirmPasswordByLink = (props) => {
  const { onSubmit } = props;

  const handleSubmit = useCallback(
    (values, formikBag) => {
      onSubmit(values);
    },
    [onSubmit],
  );

  const initialValues = {
    email: '',
    password: '',
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

ConfirmPasswordByLink.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ConfirmPasswordByLink;
