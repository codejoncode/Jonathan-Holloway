import axios from "axios";
import {
  FETCH_PROJECTS_ATTEMPTED,
  FETCH_PROJECTS_FAILED,
  FETCH_PROJECTS_SUCCESSFUL,
  FETCH_PROJECT_ATTEMPTED,
  FETCH_PROJECT_FAILED,
  FETCH_PROJECT_SUCCESSFUL
} from "../Reducers/Projects/projectConstants";

const url = "https://jonathan-holloway.herokuapp.com/projects";
export const fetchProjects = () => {
  const promise = axios.get(url);
  return dispatch => {
    dispatch({ type: FETCH_PROJECTS_ATTEMPTED });
    promise
      .then(results => {
        dispatch({ type: FETCH_PROJECTS_SUCCESSFUL, payload: results.data });
      })
      .catch(err => {
        dispatch({
          type: FETCH_PROJECTS_FAILED,
          error: `Unable to fetch projects ${err}`
        });
      });
  };
};

export const fetchOneProject = id => {
  const newUrl = url + `/${id}`;
  const promise = axios.get(newUrl);
  return dispatch => {
    dispatch({ type: FETCH_PROJECT_ATTEMPTED });
    promise
      .then(results => {
        dispatch({ type: FETCH_PROJECT_SUCCESSFUL, payload: results.data });
      })
      .catch(err => {
        dispatch({
          type: FETCH_PROJECT_FAILED,
          error: `Unable to fetch projects ${err}`
        });
      });
  };
};
