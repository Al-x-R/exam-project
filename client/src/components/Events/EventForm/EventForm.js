import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './EventForm.module.sass';
import {addEvent} from '../../../app/store/actions/eventsActionCreators';
import {connect} from 'react-redux';

const EventForm = (props) => {
  const {dispatch} = props;

  return (
    <section className={styles.formContainer}>
      <Formik
        initialValues={{
          title: '',
          eventDate: Date.now(),
          startEvent: Date.now(),
        }}
        onSubmit={(values, formikBag) => {
          dispatch(addEvent(values));
          formikBag.resetForm()
        }}>
        <Form className={styles.form}>
          <div className={styles.field}>
            <Field name="title" className={styles.input} />
          </div>
          <div className={styles.field}>
            <Field name="eventDate" type="datetime-local" className={styles.input} />
          </div>
          <button type="submit" className={styles.submit}>Create event</button>
        </Form>
      </Formik>
    </section>
  );
};

export default connect()(EventForm);