import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './EventForm.module.sass';
import { addEvent } from '../../../app/store/actions/eventsActionCreators';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const EventForm = (props) => {
  const { dispatch } = props;
  const history = useHistory();

  const validationSchema = Yup.object({
    title: Yup.string().trim().required(),
    eventDate: Yup.date().min(new Date()).required(),
  });

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const options = [
    {
      label: " ",
      value: 0,
    },
    {
      label: "1 day",
      value: day,
    },
    {
      label: "10 hours",
      value: 10 * hour,
    },
    {
      label: "5 hours",
      value: 5 * hour,
    },
    {
      label: "3 hours",
      value: 3 * hour,
    },
    {
      label: "1 hour",
      value: hour,
    },
    {
      label: "30 minutes",
      value: hour / 2,
    },
    {
      label: "10 minutes",
      value: 10 * minute,
    },
  ];

  return (
    <section className={styles.formContainer}>
      <Formik
        initialValues={{
          title: '',
          eventDate: Date.now(),
          startEvent: Date.now(),
          notifyTime: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formikBag) => {
          dispatch(addEvent(values));
          formikBag.resetForm();
          history.push('/events');
        }}>
        <Form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Enter reminder name</label>
            <Field name="title" placeholder="event name" className={styles.input}/>
            <ErrorMessage name="title"/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Select a reminder time</label>
            <Field name="eventDate" type="datetime-local" className={styles.input}/>
            <ErrorMessage name="eventDate"/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}> Select a notification time </label>
            <Field name="notifyTime" as="select" className={styles.select}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Field>
          </div>
          <button type="submit" className={styles.submit}>Create event</button>
        </Form>
      </Formik>
    </section>
  );
};

export default connect()(EventForm);