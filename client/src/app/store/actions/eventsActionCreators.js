import ACTION_TYPE from './eventsActionTypes';

export const addEvent = data => ({
  type: ACTION_TYPE.ADD_EVENT,
  payload: {
    data,
  },
});

export const editEvent = (eventId, data) => ({
  type: ACTION_TYPE.EDIT_EVENT,
  payload: {
    eventId,
    data,
  },
});

export const deleteEvent = (eventId) => ({
  type: ACTION_TYPE.DELETE_EVENT,
  payload: {
    eventId,
  },
});