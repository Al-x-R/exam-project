import React from 'react';
import { useSelector } from 'react-redux';
import EventItem from './EventItem/EventItem';
import styles from './Events.module.sass'

const Events = () => {
  const { events } = useSelector(state => state.events);

  return (
    <section>
      <h2>EVENTS</h2>
      <ul>
        {events.map((event) => (
          <li className={styles.eventItem} key={event.id}>
            <EventItem {...event} />
          </li>
        ))
        }
      </ul>
    </section>

  );
};

export default Events;
