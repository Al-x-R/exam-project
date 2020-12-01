import React from 'react';
import { useSelector } from 'react-redux';
import EventItem from './EventItem/EventItem';
import styles from './Events.module.sass';

const Events = () => {
  const { events } = useSelector(state => state.events);

  const sortedEvents = [...events].sort((a, b) => a.eventDate > b.eventDate ? 1 : -1);

  return (
    <section>
      <ul className={styles.events}>
        {sortedEvents.map((event) => (
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
