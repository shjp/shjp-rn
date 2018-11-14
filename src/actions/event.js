import { query, mutate } from '../api/graphql';

// Action Types
export const GET_EVENT = "GET_EVENT";
export const GET_EVENTS = "GET_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";

// Actions
export const getEvents = () =>
  dispatch =>
    query(`
      events {
        id,
        name,
        description,
        length,
        deadline,
        allow_maybe,
        location,
        location_description
      }`
    ).then(res =>
      dispatch({
        type: GET_EVENTS,
        events: res.data.events
      })
    ).catch(e =>
      dispatch({
        type: GET_EVENTS,
        error: e
      }));

export const getEventDetails = (id) =>
  dispatch =>
    query(`
      event(
        id: "${id}"
      ) {
        id,
        name,
        description,
        length,
        deadline,
        allow_maybe,
        location,
        location_description,
        author {
          name
        }
      }`
    ).then(res =>
      dispatch({
        type: GET_EVENT,
        event: res.data.event
      })
    ).catch(e =>
      dispatch({
        type: GET_EVENT,
        error: e
      }));

export const createEvent = () =>
  console.error('createEvent not implemented yet');

export const editEvent = () =>
  console.error('editEvent not implemented yet');