import axios from "axios";
import {
  FETCH_LECTURES_ATTEMPTED,
  FETCH_LECTURES_FAILED,
  FETCH_LECTURES_SUCCESSFUL,
} from "../Reducers/Lectures/lecturesConstants";

const url = "https://jonathan-holloway.herokuapp.com/lectures";

export const fetchLectures = () => {
  const promise = axios.get(url);
  return dispatch => {
     dispatch({type: FETCH_LECTURES_ATTEMPTED})
     promise 
       .then(results => {
          dispatch({type: FETCH_LECTURES_SUCCESSFUL, payload: results.data})
       })
       .catch(err => {
          dispatch({type: FETCH_LECTURES_FAILED, error: `Unable to fetch lecturs ${err}`})
       })
  }
}