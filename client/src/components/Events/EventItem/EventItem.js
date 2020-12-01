import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteEvent } from '../../../app/store/actions/eventsActionCreators';
import styles from './EventItem.module.sass';
import Icon from '@mdi/react';
import { mdiBeakerRemoveOutline } from '@mdi/js';

const EventItem = ({ title, id, eventDate, startEvent }) => {
  const [style, setStyle] = useState({});

  const dispatch = useDispatch();
  const actions = bindActionCreators({ deleteEvent }, dispatch);

  const startTime = new Date(startEvent).getTime();
  const estimatedTime = new Date(eventDate).getTime();
  const currentTime = new Date().getTime();

  const handleRemoveBtnClick = useCallback(() => {
    actions.deleteEvent(id);
  }, [id, actions]);

  const distance = estimatedTime - currentTime;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const progress = () => {
    if (estimatedTime > currentTime) {
      const done = ((currentTime - startTime) / (estimatedTime - startTime)) * 100;
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
      setStyle(newStyle);
    } else {
      return 0;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      progress();
    }, 1000);
  });

  return (
    <div className={styles.event}>
      <div className={styles.progress}>
        <div className={styles.progress_done} style={style}>
        </div>
        <p className={styles.description}>{title}</p>
        <p className={styles.timer}>{` 
        ${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
      </div>
      <div className={styles.icons}>
        <Icon onClick={handleRemoveBtnClick}
              path={mdiBeakerRemoveOutline}
              className={styles.icon}
              title="Remove event"
              cursor="pointer"
              size={2}
              color="#555757"
        />
      </div>
    </div>
  );
};

export default EventItem;