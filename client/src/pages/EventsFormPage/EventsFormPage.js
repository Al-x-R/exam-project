import React from 'react';
import CONSTANTS from '../../constants';
import { Link } from 'react-router-dom';
import EventForm from '../../components/Events/EventForm/EventForm';
import styles from './EventsFormPage.module.sass';

const EventsFormPage = () => {
  const pageTitle = 'Create new reminder';

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <Link to='/' className={styles.link}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="Logo"/>
          </Link>
          <h1>{pageTitle}</h1>
          <EventForm/>
        </div>


      </section>
    </>
  );
};

export default EventsFormPage;
