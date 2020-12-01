import ACTION_TYPE from './eventsActionTypes';

export const addEvent = values => ({
  type: ACTION_TYPE.ADD_EVENT,
  payload: {
    values,
  },
});

export const editEvent = (id, values) => ({
  type: ACTION_TYPE.EDIT_EVENT,
  payload: {
    id,
    values,
  },
});

export const deleteEvent = (id) => ({
  type: ACTION_TYPE.DELETE_EVENT,
  payload: {
    id,
  },
});