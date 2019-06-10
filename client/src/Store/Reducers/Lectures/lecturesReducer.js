import { createReducer } from "../../reducerUtil";
import {
  FETCH_LECTURES_SUCCESSFUL
} from "./lecturesConstants";

const initialState = [];

export const getLectures = (state, payload) => {
  return payload;
};

export default createReducer(initialState, {
  [FETCH_LECTURES_SUCCESSFUL]: getLectures
});
