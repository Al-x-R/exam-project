import ACTION_TYPE from './eventsActionTypes';

export const addEvent = values => ({
  type: ACTION_TYPE.ADD_EVENT,
  payload: {
    values,
  },
});

export const editEvent = (eventIndex, values) => ({
  type: ACTION_TYPE.EDIT_EVENT,
  payload: {
    eventIndex,
    values,
  },
});

export const deleteEvent = (eventIndex) => ({
  type: ACTION_TYPE.DELETE_EVENT,
  payload: {
    eventIndex,
  },
});