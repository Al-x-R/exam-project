import produce from 'immer';
import createReducer from './helpers/createReducer';
import ACTION_TYPE from '../actions/eventsActionTypes';

const initialState = {
  events: [],
};

let id = 0;

const handlers = {
  [ACTION_TYPE.ADD_EVENT]: produce((draftState, { payload: { data } }) => {
    draftState.events.push({
      ...data,
      id: ++id,
    });
  }),
  [ACTION_TYPE.EDIT_EVENT]: produce((draftState, { payload: { eventId, data } }) => {
    const eventIndex = draftState.events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      draftState.events[eventIndex] = {
        ...draftState.events[eventIndex],
        ...data,
      };
    }
  }),
  [ACTION_TYPE.DELETE_EVENT]: produce((draftState, { payload: { eventId } }) => {
    const eventIndex = draftState.events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      draftState.events.splice(eventIndex, 1);
    }
  }),
};

const eventsReducer = createReducer(initialState, handlers)

export default eventsReducer;