import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './EventForm.module.sass';
import {addEvent} from '../../../app/store/actions/eventsActionCreators';
import {connect} from 'react-redux';
import * as Yup from 'yup';

const EventForm = (props) => {
  const {dispatch} = props;

  const validationSchema = Yup.object({
    title: Yup.string().trim().required(),
    eventDate: Yup.date().min(new Date()).required(),
  });

  return (
    <section className={styles.formContainer}>
      <Formik
        initialValues={{
          title: '',
          eventDate: Date.now(),
          startEvent: Date.now(),
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikBag) => {
          dispatch(addEvent(values));
          formikBag.resetForm()
        }}>
        <Form className={styles.form}>
          <div className={styles.field}>
            <Field name="title" className={styles.input} />
            <ErrorMessage name="title" />
          </div>
          <div className={styles.field}>
            <Field name="eventDate" type="datetime-local" className={styles.input} />
            <ErrorMessage name="eventDate" />
          </div>
          <button type="submit" className={styles.submit}>Create event</button>
        </Form>
      </Formik>
    </section>
  );
};

export default connect()(EventForm);