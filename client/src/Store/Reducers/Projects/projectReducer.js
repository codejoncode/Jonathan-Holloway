import { createReducer } from "../../reducerUtil";
import {
  FETCH_PROJECTS_SUCCESSFUL,
  FETCH_PROJECT_SUCCESSFUL
} from "./projectConstants";
// import { FETCH_PROJECTS_ATTEMPTED, FETCH_PROJECTS_FAILED, FETCH_PROJECTS_SUCCESSFUL, FETCH_PROJECT_ATTEMPTED, FETCH_PROJECT_FAILED, FETCH_PROJECT_SUCCESSFUL } from './projectConstants';
const initialState = {
  projects: [],
  soloProject: []
}
/*nO MATTER WHAT RETURN THE PAYLOAD  POST PUT DELETE  GET ALWAYS RETURN THE PAYLOAD*/
export const getProjects = (state, payload) => {
  return {
    ...state, 
    projects: payload
  }
};

export const getProject = ( state, payload) => {
  return {
    ...state, 
    soloProject : payload
  }
}

export default createReducer(initialState, {
  [FETCH_PROJECTS_SUCCESSFUL]: getProjects,
  [FETCH_PROJECT_SUCCESSFUL]: getProject
});
