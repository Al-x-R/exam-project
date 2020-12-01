import React, { useLayoutEffect, useState } from 'react';
import Events from '../../components/Events/Events';
import { Link, useLocation } from 'react-router-dom';
import CONSTANTS from '../../constants';
import styles from './EventsPage.module.sass';
import { useSelector } from 'react-redux';

const EventsPage = () => {
  const [isEvents, setIsEvents] = useState();
  const { events } = useSelector(state => state.events);
  const location = useLocation();

  useLayoutEffect(() => {
    setIsEvents(location.pathname === '/events');
  }, [location.pathname]);

  const pageTitle = (isEvents && events.length === 0) ? 'You don\'t have any reminders' : 'Live upcoming checks';

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Link to='/'>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="Logo"/>
            </Link>
            <Link className={styles.createEventBtn} to='/new_reminder'>
              Create a new reminder
            </Link>
          </header>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          <Events/>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
