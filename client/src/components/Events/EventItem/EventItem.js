import React, {useEffect, useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteEvent } from '../../../app/store/actions/eventsActionCreators';
import styles from './EventItem.module.sass';
import intervalToDuration from 'date-fns/intervalToDuration';
import Icon from '@mdi/react'
import { mdiSquareEditOutline, mdiBeakerRemoveOutline } from '@mdi/js'


const EventItem = ({title, id, eventDate, startEvent}) => {
  const [style, setStyle] = useState({});

  const dispatch = useDispatch();
  const actions = bindActionCreators({ deleteEvent }, dispatch);

  const startTime = new Date(startEvent).getTime();
  const estimatedTime = new Date(eventDate).getTime();
  const currentTime = new Date().getTime();

  const handleRemoveBtnClick = useCallback(() => {
    actions.deleteEvent(id);
  }, [id, actions]);

  const interval = intervalToDuration({
    start: currentTime,
    end: estimatedTime,
  });

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
  } );

  const {years, months, days, hours, minutes, seconds} = interval;

  return (
    <div className={styles.event}>
      <div className={styles.progress}>
        <div className={styles.progress_done} style={style}>
        </div>
        <p className={styles.description}>{title}</p>
        <p className={styles.timer}>{`${years}y ${months}m 
        ${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
      </div>
      <div className={styles.icons}>
        <Icon path={mdiSquareEditOutline}
              className={styles.icon}
              title="Edit event"
              size={2}
              color="red"
              />
              <Icon path={mdiBeakerRemoveOutline}
              className={styles.icon}
              title="Remove event"
              size={2}
              color="red"
              />
      </div>
    </div>


  );
};

export default EventItem;