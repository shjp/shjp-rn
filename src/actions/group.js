import { query } from '../api/graphql';

// Action Types
export const GET_GROUPS = "GET_GROUPS";

// Actions
export const getGroups = () =>
  dispatch =>
    query(`
      groups {
        id,
        name,
        description
      }`
    ).then(res =>
      dispatch({
        type: GET_GROUPS,
        groups: res.data.groups
      })
    ).catch(e =>
      dispatch({
        type: GET_GROUPS,
        error: e
      }));